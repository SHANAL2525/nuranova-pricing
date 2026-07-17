import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { company } from "@/lib/constants";

export function FinalCTA() {
  return <section className="section-pad bg-[var(--brand-navy)] text-white"><div className="mx-auto max-w-4xl px-4 text-center sm:px-6"><h2 className="text-3xl font-black sm:text-5xl">Ready to Build Your Business Website?</h2><p className="mt-4 text-lg text-blue-50">Tell us about your business and we will recommend the most suitable website package.</p><div className="mt-7 grid gap-3 sm:flex sm:justify-center"><Button href="#contact">Get a Free Quote</Button><Button href={company.whatsappUrl} target="_blank" variant="secondary"><MessageCircle size={18} /> WhatsApp Us</Button><Button href={`tel:${company.phoneInternational}`} variant="secondary"><Phone size={18} /> Call {company.phoneDisplay}</Button></div></div></section>;
}
