import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/work/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedWork() {
  return <section className="section-pad"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><SectionHeading title="Selected Work" text="Concept projects are clearly labelled and are not presented as real clients." /><div className="grid gap-5 lg:grid-cols-3">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></div></section>;
}
