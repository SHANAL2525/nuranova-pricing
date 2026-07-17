export function cn(...inputs: Array<string | false | null | undefined>) {
  return inputs.filter(Boolean).join(" ");
}

export function sanitizeText(value: unknown) {
  return String(value ?? "").replace(/[<>]/g, "").trim();
}
