"use client";

import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
  label: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  type?: string;
  as?: "input" | "textarea" | "select";
  options?: string[];
  placeholder?: string;
};

export function FormField({ label, registration, error, type = "text", as = "input", options, placeholder }: Props) {
  const id = registration.name;
  const base = "mt-2 min-h-11 w-full rounded-lg border border-[var(--border)] bg-white px-3 py-3 text-[var(--text-main)]";
  return (
    <label className="block text-sm font-bold text-[var(--brand-navy)]" htmlFor={id}>
      {label}
      {as === "textarea" ? <textarea id={id} className={`${base} min-h-32`} placeholder={placeholder} {...registration} /> : null}
      {as === "select" ? (
        <select id={id} className={base} {...registration}>
          <option value="">Select</option>
          {options?.map((option) => <option key={option}>{option}</option>)}
        </select>
      ) : null}
      {as === "input" ? <input id={id} type={type} className={base} placeholder={placeholder} {...registration} /> : null}
      {error ? <span className="mt-1 block text-sm text-[var(--error)]">{error.message}</span> : null}
    </label>
  );
}
