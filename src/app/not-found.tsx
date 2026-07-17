import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return <main className="section-pad text-center"><Image src="/brand/nuranova-mark.png" alt="" width={72} height={72} className="mx-auto" /><h1 className="mt-6 text-4xl font-black text-[var(--brand-navy)]">Page not found</h1><p className="mt-3 text-[var(--text-secondary)]">The page you opened is not available.</p><div className="mt-6 flex justify-center gap-3"><Button href="/">Return to Home</Button><Button href="/contact" variant="secondary">Contact</Button></div></main>;
}
