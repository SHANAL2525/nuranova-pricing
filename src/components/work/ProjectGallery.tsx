export function ProjectGallery({ title }: { title: string }) {
  return <div className="grid gap-4 sm:grid-cols-2"><div className="aspect-video rounded-lg bg-[var(--brand-soft)] p-4">{title} desktop concept</div><div className="aspect-[9/16] max-h-96 rounded-lg bg-[var(--brand-light)] p-4">Mobile concept</div></div>;
}
