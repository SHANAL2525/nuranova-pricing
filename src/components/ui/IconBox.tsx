import * as Icons from "lucide-react";
import type { IconName } from "@/types";

export function IconBox({ name }: { name: IconName }) {
  const Icon = Icons[name] as Icons.LucideIcon;
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--brand-light)] text-[var(--brand-blue-dark)]">
      <Icon aria-hidden="true" size={22} />
    </span>
  );
}
