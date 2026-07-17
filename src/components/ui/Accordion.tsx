"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { FAQ } from "@/types";

export function Accordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-[var(--border)] rounded-lg border border-[var(--border)] bg-white">
      {items.map((item, index) => (
        <div key={item.question}>
          <button
            className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-[var(--brand-navy)]"
            aria-expanded={open === index}
            onClick={() => setOpen(open === index ? -1 : index)}
          >
            {item.question}
            <ChevronDown aria-hidden="true" className={open === index ? "rotate-180 transition" : "transition"} />
          </button>
          {open === index ? <p className="px-5 pb-5 leading-7 text-[var(--text-secondary)]">{item.answer}</p> : null}
        </div>
      ))}
    </div>
  );
}
