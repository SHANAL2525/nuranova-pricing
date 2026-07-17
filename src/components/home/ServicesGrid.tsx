import { services } from "@/data/services";
import { Card } from "@/components/ui/Card";
import { IconBox } from "@/components/ui/IconBox";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function ServicesGrid() {
  return (
    <section className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Everything Your Business Website Needs" />
        <div className="grid grid-auto gap-5">
          {services.map((item) => <Card key={item.title}><IconBox name={item.icon} />{item.badge ? <div className="mt-4"><Badge>{item.badge}</Badge></div> : null}<h3 className="mt-4 text-xl font-extrabold text-[var(--brand-navy)]">{item.title}</h3><p className="mt-2 leading-7 text-[var(--text-secondary)]">{item.description}</p><ul className="mt-4 grid gap-2 text-sm text-[var(--text-secondary)]">{item.features.map((f) => <li key={f}>- {f}</li>)}</ul><Button href={item.href} className="mt-5 w-full" variant="secondary">{item.cta}</Button></Card>)}
        </div>
      </div>
    </section>
  );
}
