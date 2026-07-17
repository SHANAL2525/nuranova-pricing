"use client";

import { Phone, Tags } from "lucide-react";
import { company } from "@/lib/constants";
import { useSitePreferences } from "@/components/providers/SitePreferences";

export function MobileActionBar() {
  const { language } = useSitePreferences();
  const actions = [
    { label: "Call", href: `tel:${company.phoneInternational}`, icon: Phone },
    { label: "Pricing", href: "#pricing", icon: Tags },
  ];
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border)] bg-white/96 px-3 py-2 pb-[calc(.5rem+env(safe-area-inset-bottom))] shadow-2xl lg:hidden">
      <div className="mx-auto grid max-w-sm grid-cols-2 gap-2">
        {actions.map(({ label, href, icon: Icon }) => (
          <a key={label} href={href} className={label === "Pricing" ? "brand-gradient flex min-h-12 flex-col items-center justify-center rounded-xl text-xs font-extrabold text-white shadow-md" : "flex min-h-12 flex-col items-center justify-center rounded-xl text-xs font-bold text-[var(--brand-deep)] transition hover:bg-[var(--brand-light)]"}>
            <Icon aria-hidden="true" size={18} />
            <span>{language === "si" ? (label === "Call" ? "අමතන්න" : "මිල ගණන්") : label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
