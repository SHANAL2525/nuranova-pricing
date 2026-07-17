"use client";

import { Camera, Clapperboard, Palette, PenTool, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useSitePreferences } from "@/components/providers/SitePreferences";

const services = [
  { icon: Camera, title: "Photography", text: "Professional property, product, food and business photography." },
  { icon: Clapperboard, title: "Videography", text: "Short promotional videos and visual content for websites and social media." },
  { icon: Palette, title: "Brand & Visual Design", text: "Custom graphics, banners and visual assets that match your business." },
  { icon: PenTool, title: "Content Support", text: "Help preparing website text, page content and promotional messages." },
  { icon: Sparkles, title: "Custom Add-ons", text: "Extra pages, features, integrations and requirements outside a package." },
];

export function AdditionalServices() {
  const { language } = useSitePreferences();
  const si = language === "si";
  const translated = [
    { title: "ඡායාරූපකරණය", text: "නවාතැන්, නිෂ්පාදන, ආහාර සහ ව්‍යාපාර සඳහා වෘත්තීය ඡායාරූපකරණය." },
    { title: "වීඩියෝකරණය", text: "වෙබ් අඩවි සහ සමාජ මාධ්‍ය සඳහා කෙටි ප්‍රවර්ධන වීඩියෝ." },
    { title: "සන්නාම සහ දෘශ්‍ය නිර්මාණ", text: "ඔබේ ව්‍යාපාරයට ගැළපෙන graphics, banners සහ දෘශ්‍ය අංග." },
    { title: "අන්තර්ගත සහාය", text: "වෙබ් අඩවි පාඨ, පිටු අන්තර්ගත සහ ප්‍රවර්ධන පණිවිඩ සකස් කිරීමට සහාය." },
    { title: "අභිරුචි අමතර සේවා", text: "පැකේජයට පිටතින් අමතර පිටු, විශේෂාංග සහ integrations." },
  ];
  return (
    <section className="mt-14 overflow-hidden rounded-3xl bg-[#0b1739] px-5 py-10 text-white shadow-xl sm:px-8 lg:px-10">
      <div className="max-w-3xl">
        <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-blue-200">{si ? "ඉල්ලීම මත ලබාගත හැක" : "Available on request"}</p>
        <h2 className="mt-3 text-3xl font-black sm:text-4xl">{si ? "තවත් සේවාවක් අවශ්‍යද?" : "Need something more?"}</h2>
        <p className="mt-3 leading-7 text-blue-50">{si ? "ඔබේ නිශ්චිත අවශ්‍යතා අනුව මෙම සේවාවන් සඳහා මිල ගණන් ලබාදේ. සුදුසු විසඳුමක් සඳහා අප අමතන්න." : "These services are quoted according to your exact requirements. Contact us and we will prepare the right option for your project."}</p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {services.map(({ icon: Icon, title, text }, index) => (
          <article key={title} className="group rounded-2xl border border-white/15 bg-white/10 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-300/70 hover:bg-white/15">
            <Icon className="text-blue-200 transition group-hover:scale-110 group-hover:text-white" aria-hidden="true" />
            <h3 className="mt-4 font-extrabold">{si ? translated[index].title : title}</h3>
            <p className="mt-2 text-sm leading-6 text-blue-100">{si ? translated[index].text : text}</p>
          </article>
        ))}
      </div>
      <Button href="#contact" className="mt-8">{si ? "අමතර විස්තර ඉල්ලන්න" : "Request Additional Details"}</Button>
    </section>
  );
}
