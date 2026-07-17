import { Badge } from "./Badge";

export function SectionHeading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? <Badge>{eyebrow}</Badge> : null}
      <h2 className="mt-4 text-3xl font-extrabold tracking-normal text-[var(--brand-navy)] sm:text-4xl lg:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-8 text-[var(--text-secondary)] sm:text-lg">{text}</p> : null}
    </div>
  );
}
