"use client";

import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { company } from "@/lib/constants";
import { Container } from "./Container";
import { useSitePreferences } from "@/components/providers/SitePreferences";

export function Footer() {
  const { language } = useSitePreferences();
  const si = language === "si";
  return (
    <footer className="border-t border-[var(--border)] bg-white">
      <Container className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/brand/nuranova-mark.png" alt="" width={44} height={44} className="h-11 w-11 object-contain" />
            <span className="leading-none"><span className="block text-xl font-black tracking-tight text-[var(--brand-blue-dark)]">nuranova</span><span className="mt-1 block text-[0.55rem] font-extrabold uppercase tracking-[0.3em] text-[var(--brand-deep)]">Solutions</span></span>
          </div>
          <p className="mt-4 leading-7 text-[var(--text-secondary)]">{si ? "Nuranova Solutions ශ්‍රී ලාංකික ව්‍යාපාර සඳහා වෘත්තීය වෙබ් අඩවි, ඇණවුම් පද්ධති සහ වෙන්කිරීමේ විසඳුම් නිර්මාණය කරයි." : "Nuranova Solutions builds professional websites, online-ordering systems, booking platforms and custom web solutions for growing Sri Lankan businesses."}</p>
        </div>
        <div>
          <h2 className="font-extrabold text-[var(--brand-navy)]">{si ? "ඉක්මන් සබැඳි" : "Quick links"}</h2>
          <div className="mt-4 grid gap-2">
            {navigation.map((item) => <Link className="text-[var(--text-secondary)] hover:text-[var(--brand-blue-dark)]" key={item.href} href={item.href}>{si ? (item.label === "Pricing" ? "මිල ගණන්" : "සම්බන්ධ වන්න") : item.label}</Link>)}
          </div>
        </div>
        <div>
          <h2 className="font-extrabold text-[var(--brand-navy)]">{si ? "සම්බන්ධ වන්න" : "Contact"}</h2>
          <div className="mt-4 grid gap-2 text-[var(--text-secondary)]">
            <a href={`tel:${company.phoneInternational}`}>{company.phoneDisplay}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a href={company.whatsappUrl} target="_blank" rel="noreferrer">{si ? "WhatsApp මඟින් අමතන්න" : "WhatsApp Nuranova Solutions"}</a>
          </div>
        </div>
      </Container>
      <div className="border-t border-[var(--border)] py-5 text-center text-sm text-[var(--text-muted)]">© {new Date().getFullYear()} Nuranova Solutions. All rights reserved.</div>
    </footer>
  );
}
