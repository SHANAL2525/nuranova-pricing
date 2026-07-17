import { z } from "zod";

export const quoteSchema = z.object({
  fullName: z.string().min(2, "Enter your full name").max(80),
  businessName: z.string().min(2, "Enter the business name").max(120),
  phone: z.string().min(7, "Enter a valid phone or WhatsApp number").max(30),
  email: z.string().email("Enter a valid email address"),
  businessType: z.string().min(1, "Select a business type"),
  requiredService: z.string().min(1, "Select a required service"),
  interestedPackage: z.string().min(1, "Select a package"),
  existingWebsite: z.string().url("Enter a valid URL").optional().or(z.literal("")),
  preferredContact: z.string().min(1, "Select a preferred contact method"),
  photographyRequired: z.enum(["Yes", "No"]),
  message: z.string().min(10, "Tell us a little about the project").max(1500),
  expectedStart: z.string().min(1, "Select an expected start time"),
  consent: z.boolean().refine((value) => value, "Consent is required"),
  companyWebsite: z.string().max(0).optional(),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;
