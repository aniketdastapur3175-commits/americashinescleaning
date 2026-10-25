import { z } from "zod";

export const quoteFormSchema = z.object({
  // Step 1: Service Preferences
  serviceType: z.enum(
    ["recurring", "deep", "move-in", "airbnb", "home-office"],
    { required_error: "Please select a cleaning service" }
  ),
  frequency: z.enum(["recurring", "one-time"], {
    required_error: "Please choose whether you prefer recurring or one-time service",
  }),

  // Step 2: Property Information
  propertyType: z.enum(["house", "apartment", "office", "other"], {
    required_error: "Please select your property type",
  }),
  zipCode: z
    .string()
    .min(5, "Please enter a valid 5-digit ZIP code")
    .max(10, "ZIP code must be 10 characters or less")
    .regex(/^\d{5}(-\d{4})?$/, "Please enter a valid US ZIP code (e.g. 21085)"),
  propertySize: z.string().optional(),

  // Step 3: Contact & Timing
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Name must be less than 80 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number (at least 10 digits)")
    .regex(
      /^(\+?1[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/,
      "Please enter a valid phone number (e.g. 443-286-1945)"
    ),
  preferredDate: z.string().optional(),
  additionalNotes: z.string().max(1000, "Notes cannot exceed 1000 characters").optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must consent to being contacted regarding this quote" }),
  }),

  // Security honeypot field (must stay empty)
  websiteTrap: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
