"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2 } from "lucide-react";
import { quoteSchema, type QuoteFormValues } from "@/lib/validation";
import { company } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { FormField } from "./FormField";

const businessTypes = ["Hotel", "Villa", "Cabana", "Guest House", "Restaurant", "Cafe", "Retail Shop", "Salon or Spa", "Professional Service", "Other"];
const services = ["Business Website", "E-commerce Website", "Online Ordering", "Hotel or Villa Website", "Booking System", "Custom Web Application", "Professional Photography", "Hosting and Maintenance"];
const packages = ["Not Sure", "Business Basic", "Business Medium", "Business Premium", "Hotel Basic", "Hotel Medium", "Hotel Premium", "Custom Project"];
const contactMethods = ["WhatsApp", "Phone Call", "Email"];
const starts = ["As soon as possible", "Within one month", "Within three months", "Just researching"];

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<QuoteFormValues>({ resolver: zodResolver(quoteSchema), defaultValues: { photographyRequired: "No", consent: false } });

  async function onSubmit(values: QuoteFormValues) {
    setStatus("idle");
    const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
    setStatus(response.ok ? "success" : "error");
  }

  return (
    <form className="rounded-lg border border-[var(--border)] bg-white p-5 shadow-sm" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Full name" registration={register("fullName")} error={errors.fullName} />
        <FormField label="Business name" registration={register("businessName")} error={errors.businessName} />
        <FormField label="Phone or WhatsApp number" registration={register("phone")} error={errors.phone} />
        <FormField label="Email" type="email" registration={register("email")} error={errors.email} />
        <FormField label="Business type" as="select" options={businessTypes} registration={register("businessType")} error={errors.businessType} />
        <FormField label="Required service" as="select" options={services} registration={register("requiredService")} error={errors.requiredService} />
        <FormField label="Interested package" as="select" options={packages} registration={register("interestedPackage")} error={errors.interestedPackage} />
        <FormField label="Existing website URL (optional)" registration={register("existingWebsite")} error={errors.existingWebsite} placeholder="https://example.com" />
        <FormField label="Preferred contact method" as="select" options={contactMethods} registration={register("preferredContact")} error={errors.preferredContact} />
        <FormField label="Photography required" as="select" options={["Yes", "No"]} registration={register("photographyRequired")} error={errors.photographyRequired} />
        <FormField label="Expected start time" as="select" options={starts} registration={register("expectedStart")} error={errors.expectedStart} />
        <div className="hidden"><FormField label="Company website" registration={register("companyWebsite")} /></div>
      </div>
      <div className="mt-5">
        <FormField label="Project message" as="textarea" registration={register("message")} error={errors.message} placeholder="Tell us what you need built." />
      </div>
      <label className="mt-5 flex gap-3 text-sm font-semibold text-[var(--text-secondary)]">
        <input type="checkbox" className="mt-1 h-5 w-5" {...register("consent")} />
        I agree that Nuranova Solutions may contact me regarding this inquiry.
      </label>
      {errors.consent ? <p className="mt-1 text-sm text-[var(--error)]">{errors.consent.message}</p> : null}
      <Button className="mt-6 w-full sm:w-auto" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending your request..." : "Send Quote Request"}</Button>
      <div aria-live="polite" className="mt-4">
        {status === "success" ? <p className="flex items-center gap-2 rounded-lg bg-green-50 p-3 text-sm font-semibold text-[var(--success)]"><CheckCircle2 size={18} /> Thank you. Your request has been received. Nuranova Solutions will contact you through your selected contact method. <a className="underline" href={company.whatsappUrl} target="_blank">WhatsApp Nuranova Solutions</a></p> : null}
        {status === "error" ? <p className="rounded-lg bg-red-50 p-3 text-sm font-semibold text-[var(--error)]">We could not send your request. Please try again or contact us directly through WhatsApp.</p> : null}
      </div>
    </form>
  );
}
