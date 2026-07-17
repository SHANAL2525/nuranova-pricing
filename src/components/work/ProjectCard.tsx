import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <div className="mb-4 flex aspect-[16/10] items-center justify-center rounded-lg bg-[var(--brand-soft)]">
        <div className="w-4/5 rounded-lg border border-blue-100 bg-white p-4 shadow-sm">
          <div className="h-3 w-24 rounded bg-blue-100" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="col-span-2 h-20 rounded bg-[var(--brand-light)]" />
            <div className="h-20 rounded bg-blue-50" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2"><Badge>{project.category}</Badge>{project.concept ? <Badge>Concept Project</Badge> : null}</div>
      <h3 className="mt-4 text-xl font-extrabold text-[var(--brand-navy)]">{project.title}</h3>
      <p className="mt-2 leading-7 text-[var(--text-secondary)]">{project.problem}</p>
      <ul className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-[var(--text-muted)]">
        {project.features.slice(0, 4).map((feature) => <li className="rounded-full bg-[var(--brand-soft)] px-2 py-1" key={feature}>{feature}</li>)}
      </ul>
      <Link className="mt-5 inline-flex items-center gap-2 font-bold text-[var(--brand-blue-dark)]" href={`/work/${project.slug}`}>View Case Study <ArrowRight size={17} /></Link>
    </Card>
  );
}
