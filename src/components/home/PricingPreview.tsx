import { businessPackages } from "@/data/business-packages";
import { hospitalityPackages } from "@/data/hospitality-packages";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PricingPreview() {
  return <section className="section-pad"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><SectionHeading title="Website Packages With Clear Starting Prices" /><div className="grid gap-5 md:grid-cols-2"><div className="rounded-lg border border-[var(--border)] bg-white p-6"><h3 className="text-2xl font-extrabold">Business Websites</h3><p className="mt-3 text-[var(--text-secondary)]">From {businessPackages[0].formattedPrice}. Best for business websites, ordering and e-commerce.</p></div><div className="rounded-lg border border-[var(--border)] bg-white p-6"><h3 className="text-2xl font-extrabold">Hotels & Hospitality</h3><p className="mt-3 text-[var(--text-secondary)]">From {hospitalityPackages[0].formattedPrice}. Best for hotels, villas, cabanas and guest houses.</p></div></div><div className="mt-8 text-center"><Button href="/pricing">Compare All Packages</Button></div></div></section>;
}
