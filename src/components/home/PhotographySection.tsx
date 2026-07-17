import { Camera } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = ["Hotel exterior photography", "Room and interior photography", "Villa and cabana photography", "Pool and landscape photography", "Food and restaurant photography", "Amenities photography", "Colour correction", "Web-ready image optimisation"];

export function PhotographySection() {
  return <section className="section-pad bg-white"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading title="Great Properties Need Great Visuals" text="Professional property photography is available for hotels, villas, cabanas, guest houses and restaurants that need high-quality website and social-media images." /><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{items.map((item) => <div className="rounded-lg border border-[var(--border)] p-4" key={item}><Camera className="text-[var(--brand-blue-dark)]" /><p className="mt-3 font-bold">{item}</p></div>)}</div><div className="mt-8 text-center"><p className="mb-4 font-extrabold text-[var(--brand-navy)]">Custom quotation</p><Button href="/contact">Request Photography Pricing</Button></div></div></section>;
}
