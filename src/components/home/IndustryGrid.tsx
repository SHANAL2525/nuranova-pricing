import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/data/industries";
import { Card } from "@/components/ui/Card";
import { IconBox } from "@/components/ui/IconBox";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function IndustryGrid() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Built for Your Business" text="We create practical websites for businesses that need more inquiries, bookings, orders and customer trust." />
        <div className="grid grid-auto gap-5">
          {industries.map((item) => <Card key={item.title}><IconBox name={item.icon} /><h3 className="mt-4 text-xl font-extrabold text-[var(--brand-navy)]">{item.title}</h3><p className="mt-2 leading-7 text-[var(--text-secondary)]">{item.description}</p><p className="mt-3 text-sm font-semibold text-[var(--text-muted)]">{item.features.join(" / ")}</p><Link className="mt-5 inline-flex items-center gap-2 font-bold text-[var(--brand-blue-dark)]" href={item.href}>View options <ArrowRight size={17} /></Link></Card>)}
        </div>
      </div>
    </section>
  );
}
