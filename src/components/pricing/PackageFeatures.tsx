export function PackageFeatures({ features }: { features: string[] }) {
  return <ul className="grid gap-2 text-sm text-[var(--text-secondary)]">{features.map((feature) => <li key={feature}>- {feature}</li>)}</ul>;
}
