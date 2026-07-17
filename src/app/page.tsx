"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";
import { PricingTabs } from "@/components/pricing/PricingTabs";
import { PricingNotes } from "@/components/pricing/PricingNotes";
import { AdditionalServices } from "@/components/pricing/AdditionalServices";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/constants";
import { useSitePreferences } from "@/components/providers/SitePreferences";

export default function Home() {
  const { language } = useSitePreferences();
  const si = language === "si";
  return (
    <>
      <div id="home" />
      <section id="pricing" className="pricing-bg scroll-mt-20 py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--brand-blue-dark)]">{si ? "පැහැදිලි වෙබ් අඩවි මිල ගණන්" : "Clear website pricing"}</p>
            <h1 className="text-4xl font-black tracking-tight text-[var(--brand-navy)] sm:text-5xl lg:text-6xl">{si ? "ඔබට ගැළපෙන වෙබ් අඩවි පැකේජය තෝරන්න" : "Find the right website price"}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg">{si ? "පැකේජ, විශේෂාංග සහ මිල ගණන් සැසඳීමට ව්‍යාපාරික හෝ හෝටල් වෙබ් අඩවි තෝරන්න." : "Select Business Websites or Hotel Websites to compare packages, features and prices."}</p>
          </div>
          <PricingTabs />
          <PricingNotes />
          <AdditionalServices />
        </div>
      </section>
      <section id="contact" className="lazy-section scroll-mt-20 bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center"><p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-[var(--brand-blue-dark)]">{si ? "අප සමඟ කතා කරන්න" : "Let's talk"}</p><h2 className="text-4xl font-black text-[var(--brand-navy)] sm:text-5xl">{si ? "අප අමතන්න" : "Contact Us"}</h2><p className="mt-4 text-lg leading-8 text-[var(--text-secondary)]">{si ? "වෙබ් අඩවි පැකේජයක් හෝ අමතර සේවාවක් පිළිබඳ සාකච්ඡා කිරීමට දුරකථනයෙන්, WhatsApp හෝ Email මඟින් අප අමතන්න." : "Call, WhatsApp or email us to discuss a website package or additional service."}</p></div>
          <div className="mb-8 grid gap-3 md:grid-cols-3"><Button href={`tel:${company.phoneInternational}`} variant="secondary"><Phone size={18} /> {si ? "දැන් අමතන්න" : "Call Now"}</Button><Button href={company.whatsappUrl} target="_blank" variant="secondary"><MessageCircle size={18} /> {si ? "WhatsApp පණිවිඩයක්" : "WhatsApp Us"}</Button><Button href={`mailto:${company.email}`} variant="secondary"><Mail size={18} /> {si ? "Email යවන්න" : "Send Email"}</Button></div>
        </div>
      </section>
    </>
  );
}
