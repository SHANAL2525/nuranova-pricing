import { Resend } from "resend";
import { company } from "./constants";
import type { QuoteFormValues } from "./validation";

export async function sendQuoteEmail(data: QuoteFormValues) {
  if (!process.env.RESEND_API_KEY) {
    if (process.env.NODE_ENV === "development") {
      console.info("Validated quote request", data);
      return { ok: true, developmentFallback: true };
    }
    return { ok: false, error: "Email service is not configured." };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const to = process.env.CONTACT_TO_EMAIL || company.email;

  const result = await resend.emails.send({
    from: "Nuranova Website <onboarding@resend.dev>",
    to,
    subject: `New quote request from ${data.businessName}`,
    replyTo: data.email,
    text: [
      `Name: ${data.fullName}`,
      `Business: ${data.businessName}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Business type: ${data.businessType}`,
      `Service: ${data.requiredService}`,
      `Package: ${data.interestedPackage}`,
      `Existing website: ${data.existingWebsite || "Not provided"}`,
      `Preferred contact: ${data.preferredContact}`,
      `Photography required: ${data.photographyRequired}`,
      `Expected start: ${data.expectedStart}`,
      "",
      data.message,
    ].join("\n"),
  });

  if (result.error) return { ok: false, error: result.error.message };
  return { ok: true };
}
