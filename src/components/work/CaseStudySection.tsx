import type { ReactNode } from "react";

export function CaseStudySection({ title, children }: { title: string; children: ReactNode }) {
  return <section className="mt-9 rounded-lg border border-[var(--border)] bg-white p-5"><h2 className="text-2xl font-extrabold">{title}</h2><div className="mt-3 leading-8 text-[var(--text-secondary)]">{children}</div></section>;
}
