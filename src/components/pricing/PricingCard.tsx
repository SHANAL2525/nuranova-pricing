import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { PricingPackage } from "@/types";

export function PricingCard({ item }: { item: PricingPackage }) {
  return (
    <Card className={item.recommended ? "group relative border-2 border-[var(--brand-blue)] shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl" : "group relative transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"}>
      {item.recommended ? <div className="mb-3"><Badge>Recommended</Badge></div> : null}
      <h3 className="text-2xl font-extrabold text-[var(--brand-navy)]">{item.name}</h3>
      <p className="mt-2 min-h-14 text-[var(--text-secondary)]">{item.description}</p>
      <p className="mt-5 text-3xl font-black text-[var(--brand-blue-dark)]">{item.formattedPrice}</p>
      <p className="mt-2 text-sm font-semibold text-[var(--text-muted)]">{item.bestFor}</p>
      <ul className="mt-5 grid gap-3 text-sm text-[var(--text-secondary)]">
        {item.features.map((feature) => (
          <li className="flex gap-2" key={feature}><CheckCircle2 className="mt-0.5 shrink-0 text-[var(--success)]" size={18} /> {feature}</li>
        ))}
        <li className="flex gap-2 font-bold"><CheckCircle2 className="mt-0.5 shrink-0 text-[var(--success)]" size={18} /> {item.supportPeriod}</li>
      </ul>
      <Button className="mt-6 w-full group-hover:shadow-xl" href="#contact">{item.ctaLabel}</Button>
    </Card>
  );
}
