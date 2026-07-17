export function FormStatus({ message, tone = "info" }: { message: string; tone?: "info" | "success" | "error" }) {
  const color = tone === "error" ? "text-[var(--error)] bg-red-50" : tone === "success" ? "text-[var(--success)] bg-green-50" : "text-[var(--brand-blue-dark)] bg-[var(--brand-light)]";
  return <p aria-live="polite" className={`rounded-lg p-3 text-sm font-semibold ${color}`}>{message}</p>;
}
