import { faqs } from "@/data/faqs";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQSection() {
  return <section className="section-pad"><SectionHeading title="Frequently Asked Questions" /><Accordion items={faqs} /></section>;
}
