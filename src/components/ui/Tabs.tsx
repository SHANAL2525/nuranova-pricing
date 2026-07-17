"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export function Tabs({ tabs }: { tabs: { label: string; content: ReactNode }[] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="mx-auto mb-8 max-w-2xl rounded-2xl border border-blue-200 bg-white p-2 shadow-[0_18px_50px_rgba(20,38,92,0.12)] sm:p-2.5">
      <div role="tablist" aria-label="Pricing categories" className="grid grid-cols-2 gap-2">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            role="tab"
            aria-selected={active === index}
            className={active === index ? "brand-gradient min-h-14 rounded-xl px-3 text-sm font-extrabold text-white shadow-md sm:text-base" : "min-h-14 rounded-xl bg-[var(--brand-soft)] px-3 text-sm font-extrabold text-[var(--brand-deep)] transition hover:bg-[var(--brand-light)] sm:text-base"}
            onClick={() => setActive(index)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") setActive((active + 1) % tabs.length);
              if (event.key === "ArrowLeft") setActive((active + tabs.length - 1) % tabs.length);
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="px-2 pt-2.5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">Select a category to view prices</p>
      </div>
      <div role="tabpanel">{tabs[active].content}</div>
    </div>
  );
}
