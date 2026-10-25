# America Shines Cleaning Service, LLC — Website Preview & Client Handover

A high-fidelity, contemporary residential home care web application built for **America Shines Cleaning Service, LLC**, based in Joppatowne, Harford County, Maryland, USA.

> **Client Concept Preview Notice**:
> This website is an independent contemporary concept redesign developed using publicly available directory listings. It is prepared for client demonstration and owner review. Domain names, services, and live notifications are pending final confirmation from America Shines Cleaning Service, LLC.

---

## Business Identity & Directory Information

- **Legal Business Name**: America Shines Cleaning Service, LLC
- **Reported Location**: 219 Philadelphia Rd, Joppatowne, MD 21085, USA
- **Direct Phone**: `+1 443-286-1945` (`(443) 286-1945`)
- **Reported Email**: `amcdonald2005@comcast.net` *(Pending owner authorization before live notification routing)*
- **Core Market**: Joppatowne (21085), Bel Air (21014, 21015), Edgewood (21040), Abingdon (21009), Fallston (21047), White Marsh (21162), Perry Hall (21128), and the Route 40 & I-95 Harford/Baltimore County corridors.

---

## Architectural & Design Direction

- **Aesthetic**: *Contemporary American Home Care* — Warm white (`#FAF9F5`), Midnight Navy (`#0A1128`), Sky Blue accents (`#3A6EA5`, `#D0E1F9`), and Architectural Brass (`#C5A880`).
- **Typography**: Playfair Display (editorial serif headlines) and Plus Jakarta Sans (meticulous modern body).
- **Interactions**: Scroll-driven storytelling, progressive multi-step estimate request modal, real-time Harford County ZIP validation, and responsive mobile dock.

---

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion (respects `prefers-reduced-motion`)
- **Schema Validation**: Zod (client & server-side)
- **Email Delivery**: Resend (Serverless API integration)
- **Icons**: Lucide React

---

## Environment Variables Configuration

Copy `.env.example` to `.env.local` to configure live delivery and site domain:

```bash
cp .env.example .env.local
```

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | API Key from Resend. If omitted, quote endpoint returns a clear 503 directing users to call directly. | `re_123456...` |
| `QUOTE_NOTIFICATION_EMAIL` | Owner-authorized destination email for quote leads. | `owner@example.com` |
| `RESEND_FROM_EMAIL` | Verified sender email address in Resend. | `America Shines Quotes <onboarding@resend.dev>` |
| `NEXT_PUBLIC_SITE_URL` | Confirmed domain or Vercel preview URL for Open Graph & canonical tags. | `https://your-preview.vercel.app` |
| `ENABLE_INDEXING` | Controls crawler indexing in `robots.ts` & `layout.tsx`. Keep `false` until approved. | `false` |

---

## Quote Request Flow & Security

1. **Client-Side Form**: 3-step progressive modal with service selection, property characteristics, and contact details with consent confirmation.
2. **Bot & Spam Protection**: Invisible honeypot field traps scrapers without executing serverless compute.
3. **Payload Limiting**: Max 50 KB request limit enforced at route entry to prevent memory exhaustion.
4. **Header Injection Prevention**: Rejects newline characters (`\r`, `\n`) in single-line email fields.
5. **Debouncing**: 30-second deduplication per email and ZIP code prevents accidental rapid resubmissions.
6. **Delivery Truthfulness**:
   - If Resend API credentials or notification email are missing, returns status `503 (DELIVERY_NOT_CONFIGURED)` with honest feedback and direct phone fallback.
   - If Resend rejects the request, returns status `502 (DELIVERY_FAILED)`.
   - Never simulates success in production.
7. **PII Safety**: Does not log customer names, phones, or email addresses to server logs.

---

## Vercel Deployment Guide

1. **Connect Repository**:
   Import this repository in the [Vercel Dashboard](https://vercel.com).
2. **Framework Preset**:
   Select **Next.js** (Vercel automatically detects Next.js 16).
3. **Environment Variables**:
   In Project Settings &gt; Environment Variables, add:
   - `RESEND_API_KEY` (optional for initial preview)
   - `QUOTE_NOTIFICATION_EMAIL` (authorized owner email)
   - `NEXT_PUBLIC_SITE_URL` (assigned Vercel deployment URL)
   - `ENABLE_INDEXING` = `false`
4. **Deploy**:
   Click **Deploy**. Build completes in under 30 seconds.

---

## Owner Pre-Launch Checklist

Before handing over the website as the official production domain:

- [ ] **Owner Authorization**: Confirm business owner consents to public web presence.
- [ ] **Email Authorization**: Confirm authorized email address for customer inquiry notifications.
- [ ] **Domain Registration**: Register intended domain name (e.g. through Vercel or registrar) and point DNS.
- [ ] **Service Catalog Verification**: Confirm exact service boundaries and service offerings.
- [ ] **Enable Indexing**: Set `ENABLE_INDEXING=true` in Vercel to allow Google Search indexing.
- [ ] **Remove Preview Disclaimer**: Remove the unsolicited redesign disclaimer from `Footer.tsx` and trust components.

---

## Development & Verification Commands

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run type check & build
npm run build

# Run linting checks
npm run lint
```
