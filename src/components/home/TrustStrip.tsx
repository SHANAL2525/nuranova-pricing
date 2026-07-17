import { CreditCard, Globe2, MessageCircle, ServerCog, Smartphone } from "lucide-react";

const points = [
  ["Mobile Responsive", Smartphone],
  ["Domain & Hosting Included", ServerCog],
  ["Online Payments", CreditCard],
  ["Booking & Order Systems", Globe2],
  ["Local Business Support", MessageCircle],
];

export function TrustStrip() {
  return (
    <section className="border-y border-[var(--border)] bg-[var(--brand-navy)] text-white">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 py-5 sm:grid-cols-2 lg:grid-cols-5">
        {points.map(([label, Icon]) => {
          const RealIcon = Icon as typeof Smartphone;
          return <div className="flex items-center gap-3 text-sm font-bold" key={String(label)}><RealIcon aria-hidden="true" size={19} /> {String(label)}</div>;
        })}
      </div>
    </section>
  );
}
