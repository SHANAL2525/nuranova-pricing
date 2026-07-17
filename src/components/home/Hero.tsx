import { CalendarDays, CheckCircle2, CreditCard, LayoutDashboard, MessageCircle, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { company } from "@/lib/constants";

export function Hero() {
  return (
    <section id="home" className="scroll-mt-20 overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:px-8 lg:py-20">
        <div>
          <Badge>Clear website packages</Badge>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-[var(--brand-navy)] sm:text-5xl lg:text-7xl">Professional Websites With Clear Prices</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">Choose a business or hotel website package, compare every included feature and contact us when you are ready.</p>
          <div className="mt-7 grid gap-3 sm:flex">
            <Button href="#contact">Get a Free Quote</Button>
            <Button href="#pricing" variant="secondary">View Packages</Button>
            <Button href={company.whatsappUrl} variant="ghost" target="_blank"><MessageCircle size={18} /> WhatsApp Us</Button>
          </div>
          <p className="mt-5 text-sm font-semibold text-[var(--text-muted)]">Mobile responsive - Fast - Secure - Easy to manage</p>
        </div>
        <div className="relative min-h-[25rem] rounded-lg border border-[var(--border)] bg-[var(--brand-soft)] p-4 shadow-xl">
          <div className="rounded-lg border border-blue-100 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-red-300" /><span className="h-3 w-3 rounded-full bg-yellow-300" /><span className="h-3 w-3 rounded-full bg-green-300" /></div>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <div className="md:col-span-2"><div className="h-8 w-44 rounded bg-[var(--brand-light)]" /><div className="mt-4 h-32 rounded-lg brand-gradient" /></div>
              <div className="rounded-lg bg-[var(--brand-soft)] p-3"><Smartphone /><p className="mt-3 font-bold">Mobile view</p><div className="mt-3 h-20 rounded bg-white" /></div>
            </div>
          </div>
          <div className="absolute bottom-5 left-5 grid max-w-[14rem] gap-3">
            {[["Online order", CheckCircle2], ["Booking inquiry", CalendarDays], ["Payment success", CreditCard]].map(([text, Icon]) => {
              const RealIcon = Icon as typeof CheckCircle2;
              return <div key={String(text)} className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-white p-3 text-sm font-bold shadow"><RealIcon className="text-[var(--brand-blue-dark)]" size={18} /> {String(text)}</div>;
            })}
          </div>
          <div className="absolute bottom-5 right-5 hidden rounded-lg border border-[var(--border)] bg-white p-4 shadow md:block">
            <LayoutDashboard className="text-[var(--brand-blue-dark)]" />
            <p className="mt-2 text-sm font-bold">Admin dashboard</p>
          </div>
        </div>
      </div>
    </section>
  );
}
