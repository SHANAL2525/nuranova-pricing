import { NextResponse } from "next/server";
import { sendQuoteEmail } from "@/lib/email";
import { sanitizeText } from "@/lib/utils";
import { quoteSchema } from "@/lib/validation";

const hits = new Map<string, { count: number; reset: number }>();

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "local";
  const now = Date.now();
  const current = hits.get(ip) || { count: 0, reset: now + 60_000 };
  if (current.reset < now) { current.count = 0; current.reset = now + 60_000; }
  current.count += 1;
  hits.set(ip, current);
  if (current.count > 5) return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });

  const raw = await request.json().catch(() => null);
  const cleaned = Object.fromEntries(Object.entries(raw || {}).map(([key, value]) => [key, typeof value === "boolean" ? value : sanitizeText(value)]));
  const parsed = quoteSchema.safeParse(cleaned);
  if (!parsed.success) return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
  if (parsed.data.companyWebsite) return NextResponse.json({ ok: true });

  const result = await sendQuoteEmail(parsed.data);
  if (!result.ok) return NextResponse.json({ ok: false, error: result.error }, { status: 500 });
  return NextResponse.json({ ok: true });
}
