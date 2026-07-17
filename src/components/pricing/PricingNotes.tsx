"use client";

import { packageNotes } from "@/lib/constants";
import { useSitePreferences } from "@/components/providers/SitePreferences";

const sinhalaNotes = [
  "පළමු වසර සඳහා සාමාන්‍ය domain, hosting සහ SSL ඇතුළත් වේ.", "දෙවන වසරේ සිට වාර්ෂික අලුත් කිරීමේ ගාස්තු අදාළ වේ.",
  "ගෙවීම් ද්වාර ගනුදෙනු ගාස්තු සැපයුම්කරු විසින් වෙනම අය කෙරේ.", "ගෙවීම් ද්වාර වෙළඳ අනුමැතිය Nuranova Solutions විසින් සහතික නොකෙරේ.",
  "අභිරුචි ක්‍රියාකාරීත්වයන් සඳහා වෙනම මිල ගණන් ලබාදේ.", "අමතර පිටු, නිෂ්පාදන, කාමර හෝ ඒකක සඳහා වෙනම මිල ගණන් ලබාදේ.",
  "වෙනම සඳහන් නොකළහොත් අන්තර්ගත ලිවීම, පරිවර්තනය සහ වෘත්තීය ඡායාරූපකරණය ඇතුළත් නොවේ.", "ඡායාරූපකරණය අභිරුචි මිල ගණනක් යටතේ ලබාගත හැක.",
  "ව්‍යාපෘති අවශ්‍යතා අනුව අවසාන මිල වෙනස් විය හැක.", "එකඟ වූ අත්තිකාරම් ගෙවීමෙන් පසු සංවර්ධනය ආරම්භ වේ.", "පැකේජයේ විෂය පථය ලිඛිතව තහවුරු කළ යුතුය.",
];

export function PricingNotes() {
  const { language } = useSitePreferences();
  const notes = language === "si" ? sinhalaNotes : packageNotes;
  return (
    <div className="mt-10 rounded-lg border border-[var(--border)] bg-[var(--brand-soft)] p-5">
      <h2 className="text-xl font-extrabold text-[var(--brand-navy)]">{language === "si" ? "මිල ගණන් සටහන්" : "Pricing notes"}</h2>
      <ul className="mt-4 grid gap-2 text-sm leading-6 text-[var(--text-secondary)] sm:grid-cols-2">
        {notes.map((note) => <li key={note}>- {note}</li>)}
      </ul>
    </div>
  );
}
