import type { ReactNode } from "react";

export function FormStep({ title, children }: { title: string; children: ReactNode }) {
  return <fieldset className="grid gap-5"><legend className="mb-3 text-lg font-extrabold text-[var(--brand-navy)]">{title}</legend>{children}</fieldset>;
}
