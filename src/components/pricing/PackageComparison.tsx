import { businessPackages } from "@/data/business-packages";
import { hospitalityPackages } from "@/data/hospitality-packages";

export function PackageComparison() {
  return <div className="grid gap-3 md:grid-cols-2">{[...businessPackages, ...hospitalityPackages].map((p) => <div className="rounded-lg border border-[var(--border)] bg-white p-4" key={p.id}><strong>{p.name}</strong><span className="ml-2 text-[var(--brand-blue-dark)]">{p.formattedPrice}</span></div>)}</div>;
}
