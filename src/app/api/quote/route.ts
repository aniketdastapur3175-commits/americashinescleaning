import { NextRequest, NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/schema";

// In-memory debounce cache to prevent accidental double-clicks or rapid spam
const recentSubmissions = new Map<string, number>();

// Maximum permitted request body size: 50 KB
const MAX_REQUEST_BYTES = 50 * 1024;

// CRLF pattern to prevent email header injection
const CRLF_REGEX = /[\r\n]/;

/**
 * Sanitizes single-line input strings by trimming and stripping control characters
 */
function sanitizeSingleLine(str: string): string {
  return str.replace(/[\x00-\x1F\x7F]/g, "").trim();
}

export async function POST(request: NextRequest) {
  try {
    // 1. Enforce payload size limit
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > MAX_REQUEST_BYTES) {
      return NextResponse.json(
        {
          success: false,
          error: "Request payload exceeds permitted limit.",
        },
        { status: 413 }
      );
    }

    const rawText = await request.text();
    if (rawText.length > MAX_REQUEST_BYTES) {
      return NextResponse.json(
        {
          success: false,
          error: "Request payload exceeds permitted limit.",
        },
        { status: 413 }
      );
    }

    let body: Record<string, unknown>;
    try {
      body = JSON.parse(rawText);
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: "Malformed JSON payload.",
        },
        { status: 400 }
      );
    }

    // 2. Spam protection via honeypot trap field
    if (
      body.websiteTrap &&
      typeof body.websiteTrap === "string" &&
      body.websiteTrap.trim().length > 0
    ) {
      // Return a simulated success to appease automated bot harvesters without sending any emails
      return NextResponse.json(
        { success: true, message: "Inquiry received." },
        { status: 200 }
      );
    }

    // 3. Server-side validation using Zod
    const validationResult = quoteFormSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please verify all required fields.",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 4. Header injection prevention on single-line fields
    const singleLineFields = [
      data.fullName,
      data.email,
      data.phone,
      data.zipCode,
      data.serviceType,
      data.frequency,
      data.propertyType,
      data.preferredDate || "",
    ];

    for (const field of singleLineFields) {
      if (CRLF_REGEX.test(field)) {
        return NextResponse.json(
          {
            success: false,
            error: "Invalid characters detected in submitted fields.",
          },
          { status: 400 }
        );
      }
    }

    // Sanitize values
    const safeName = sanitizeSingleLine(data.fullName);
    const safeEmail = sanitizeSingleLine(data.email.toLowerCase());
    const safePhone = sanitizeSingleLine(data.phone);
    const safeZip = sanitizeSingleLine(data.zipCode);
    const safeSize = data.propertySize ? sanitizeSingleLine(data.propertySize) : "Not specified";
    const safeDate = data.preferredDate ? sanitizeSingleLine(data.preferredDate) : "Flexible";
    const safeNotes = data.additionalNotes
      ? data.additionalNotes.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "").trim()
      : "None provided";

    // 5. Debounce / duplicate submission prevention (30 seconds)
    const submissionKey = `${safeEmail}_${data.serviceType}_${safeZip}`;
    const now = Date.now();
    const lastSubmission = recentSubmissions.get(submissionKey);
    if (lastSubmission && now - lastSubmission < 30000) {
      return NextResponse.json(
        {
          success: false,
          error:
            "A quote request was recently received for this email. Please wait a moment before resubmitting.",
        },
        { status: 429 }
      );
    }
    recentSubmissions.set(submissionKey, now);

    // Prune entries older than 60 seconds
    for (const [key, timestamp] of recentSubmissions.entries()) {
      if (now - timestamp > 60000) {
        recentSubmissions.delete(key);
      }
    }

    // 6. Inspect provider credentials
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.QUOTE_NOTIFICATION_EMAIL;
    const senderEmail =
      process.env.RESEND_FROM_EMAIL || "America Shines Quotes <onboarding@resend.dev>";

    // If email delivery is not configured, NEVER fake success in client preview or production
    if (!resendApiKey || !recipientEmail) {
      return NextResponse.json(
        {
          success: false,
          code: "DELIVERY_NOT_CONFIGURED",
          error:
            "Online automated quote dispatch is pending business owner email configuration. Please contact America Shines Cleaning Service directly at (443) 286-1945 for an immediate estimate.",
        },
        { status: 503 }
      );
    }

    // 7. Dispatch real email via Resend
    const emailContent = `
NEW QUOTE INQUIRY — America Shines Cleaning Service, LLC
==================================================
Customer Name:    ${safeName}
Email Address:    ${safeEmail}
Phone Number:     ${safePhone}
Property ZIP:     ${safeZip}

Property Type:    ${data.propertyType}
Desired Service:  ${data.serviceType}
Frequency:        ${data.frequency}
Approx. Size:     ${safeSize}
Preferred Date:   ${safeDate}

Additional Notes:
${safeNotes}

Customer Consent: Yes (Agreed to contact for estimate)
==================================================
`;

    try {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: senderEmail,
          to: [recipientEmail],
          reply_to: safeEmail,
          subject: `Quote Request: ${safeName} (${data.serviceType.toUpperCase()} - ${safeZip})`,
          text: emailContent,
        }),
      });

      if (!resendResponse.ok) {
        // Return 502 Bad Gateway without leaking internal error body
        return NextResponse.json(
          {
            success: false,
            code: "DELIVERY_FAILED",
            error:
              "Inquiry delivery service encountered an issue. Please call (443) 286-1945 directly.",
          },
          { status: 502 }
        );
      }

      // 8. Genuine delivery acceptance confirmed
      return NextResponse.json({
        success: true,
        message:
          "Thank you! Your quote request has been accepted for delivery to America Shines Cleaning Service. We will contact you shortly.",
      });
    } catch {
      return NextResponse.json(
        {
          success: false,
          code: "NETWORK_ERROR",
          error:
            "Unable to reach inquiry delivery service. Please call (443) 286-1945 directly.",
        },
        { status: 500 }
      );
    }
  } catch {
    return NextResponse.json(
      {
        success: false,
        error:
          "An unexpected server error occurred while processing your request. Please call (443) 286-1945 directly.",
      },
      { status: 500 }
    );
  }
}
