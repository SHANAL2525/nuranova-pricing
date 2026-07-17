import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  return <section className="section-pad bg-white"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading title="A Clear Process From Idea to Launch" /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{processSteps.map((step, i) => <div className="rounded-lg border border-[var(--border)] p-5" key={step.title}><span className="text-sm font-black text-[var(--brand-blue-dark)]">0{i + 1}</span><h3 className="mt-2 text-xl font-extrabold text-[var(--brand-navy)]">{step.title}</h3><p className="mt-2 leading-7 text-[var(--text-secondary)]">{step.description}</p></div>)}</div></div></section>;
}
