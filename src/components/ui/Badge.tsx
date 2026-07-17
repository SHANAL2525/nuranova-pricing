import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return <span className="inline-flex rounded-full bg-[var(--brand-light)] px-3 py-1 text-xs font-semibold text-[var(--brand-blue-dark)]">{children}</span>;
}
