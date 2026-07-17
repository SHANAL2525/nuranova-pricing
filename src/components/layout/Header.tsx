"use client";

import Image from "next/image";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";
import { useSitePreferences } from "@/components/providers/SitePreferences";

export function Header() {
  const { language, setLanguage, theme, toggleTheme } = useSitePreferences();
  const [activeSection, setActiveSection] = useState("pricing");

  useEffect(() => {
    const sections = ["pricing", "contact"].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-25% 0px -55% 0px", threshold: [0, .1, .3, .6] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <Link href="#home" className="flex min-w-0 items-center gap-2.5" aria-label="Nuranova Solutions home">
          <Image className="h-9 w-9 shrink-0 object-contain" src="/brand/nuranova-mark.png" alt="" width={40} height={40} priority />
          <span className="leading-none">
            <span className="block text-lg font-black tracking-tight text-[var(--brand-blue-dark)] sm:text-xl">nuranova</span>
            <span className="mt-1 block text-[0.55rem] font-extrabold uppercase tracking-[0.3em] text-[var(--brand-deep)]">Solutions</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navigation.map((item) => {
            const section = item.href.slice(1);
            const active = activeSection === section;
            return (
              <Link key={item.href} href={item.href} aria-current={active ? "location" : undefined} onClick={() => setActiveSection(section)} className={active ? "brand-gradient rounded-full px-5 py-2.5 text-sm font-extrabold text-white shadow-md transition" : "rounded-full px-5 py-2.5 text-sm font-bold text-[var(--text-secondary)] transition hover:bg-[var(--brand-soft)] hover:text-[var(--brand-blue-dark)]"}>
                {language === "si" ? (item.label === "Pricing" ? "මිල ගණන්" : "සම්බන්ධ වන්න") : item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-1.5">
          <div className="flex rounded-full border border-[var(--border)] bg-[var(--brand-soft)] p-1" aria-label="Language">
            <button onClick={() => setLanguage("en")} aria-pressed={language === "en"} className={language === "en" ? "rounded-full bg-[var(--surface)] px-2.5 py-1.5 text-xs font-extrabold text-[var(--brand-blue-dark)] shadow-sm" : "rounded-full px-2.5 py-1.5 text-xs font-bold text-[var(--text-muted)]"}>EN</button>
            <button onClick={() => setLanguage("si")} aria-pressed={language === "si"} className={language === "si" ? "rounded-full bg-[var(--surface)] px-2.5 py-1.5 text-xs font-extrabold text-[var(--brand-blue-dark)] shadow-sm" : "rounded-full px-2.5 py-1.5 text-xs font-bold text-[var(--text-muted)]"}>සිං</button>
          </div>
          <button onClick={toggleTheme} aria-label={theme === "light" ? "Use dark mode" : "Use light mode"} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--brand-deep)] transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md">
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
