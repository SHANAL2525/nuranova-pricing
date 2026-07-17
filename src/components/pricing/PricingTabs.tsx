"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { businessPackages } from "@/data/business-packages";
import { hospitalityPackages } from "@/data/hospitality-packages";
import { Button } from "@/components/ui/Button";
import { useSitePreferences } from "@/components/providers/SitePreferences";

const siText: Record<string, string> = {
  "Business Basic": "ව්‍යාපාරික මූලික", "Business Medium": "ව්‍යාපාරික මධ්‍යම", "Business Premium": "ව්‍යාපාරික උසස්",
  "Hotel Basic": "හෝටල් මූලික", "Hotel Medium": "හෝටල් මධ්‍යම", "Hotel Premium": "හෝටල් උසස්",
  "A professional online presence for small businesses.": "කුඩා ව්‍යාපාර සඳහා වෘත්තීය මාර්ගගත පැවැත්මක්.",
  "For receiving online orders or structured customer requests.": "මාර්ගගත ඇණවුම් සහ පාරිභෝගික ඉල්ලීම් ලබාගැනීම සඳහා.",
  "A full online-selling system with payments and management.": "ගෙවීම් සහ කළමනාකරණය සහිත සම්පූර්ණ මාර්ගගත අලෙවි පද්ධතියක්.",
  "A professional property website for direct inquiries.": "සෘජු විමසීම් සඳහා වෘත්තීය නවාතැන් වෙබ් අඩවියක්.",
  "Detailed room pages and structured booking inquiries.": "විස්තරාත්මක කාමර පිටු සහ වෙන්කිරීමේ විමසීම්.",
  "A complete online-booking experience with payments.": "ගෙවීම් සහිත සම්පූර්ණ මාර්ගගත වෙන්කිරීමේ අත්දැකීමක්.",
  "Small businesses that need a clear, trustworthy website.": "පැහැදිලි සහ විශ්වාසදායක වෙබ් අඩවියක් අවශ්‍ය කුඩා ව්‍යාපාර සඳහා.",
  "Restaurants, shops and service businesses that need order flow.": "ඇණවුම් පද්ධතියක් අවශ්‍ය අවන්හල්, වෙළඳසැල් සහ සේවා ව්‍යාපාර සඳහා.",
  "Businesses that want e-commerce, payments and dashboards.": "E-commerce, ගෙවීම් සහ dashboard අවශ්‍ය ව්‍යාපාර සඳහා.",
  "Small hotels, villas, cabanas and guest houses.": "කුඩා හෝටල්, විලා, කබානා සහ ආගන්තුක නිවාස සඳහා.",
  "Properties that need room pages, seasonal rates and inquiry management.": "කාමර පිටු, කාලීන මිල ගණන් සහ විමසීම් කළමනාකරණය අවශ්‍ය ස්ථාන සඳහා.",
  "Properties that need availability, booking management and online payments.": "ලබාගත හැකියාව, වෙන්කිරීම් කළමනාකරණය සහ මාර්ගගත ගෙවීම් අවශ්‍ය ස්ථාන සඳහා.",
  "Up to 5 pages": "පිටු 5ක් දක්වා", "Up to 6 pages": "පිටු 6ක් දක්වා", "Mobile-responsive design": "ජංගම දුරකථන සඳහා ප්‍රතිචාරී නිර්මාණය",
  "Contact form": "සම්බන්ධතා පෝරමය", "WhatsApp button": "WhatsApp බොත්තම", "Google Maps": "Google Maps", "Social-media links": "සමාජ මාධ්‍ය සබැඳි", "Social links": "සමාජ මාධ්‍ය සබැඳි",
  "Basic SEO setup": "මූලික SEO සැකසුම", "First-year standard domain": "පළමු වසරේ සාමාන්‍ය domain එක", "First-year hosting": "පළමු වසරේ hosting", "SSL certificate": "SSL සහතිකය",
  "Everything in Basic": "මූලික පැකේජයේ සියල්ල", "Everything in Medium": "මධ්‍යම පැකේජයේ සියල්ල", "Online-order requests": "මාර්ගගත ඇණවුම් ඉල්ලීම්",
  "Cash-on-delivery option": "භාණ්ඩ ලැබුණු පසු ගෙවීම", "Bank-transfer option": "බැංකු හුවමාරු විකල්පය", "Admin dashboard": "පරිපාලන dashboard එක", "Email order notifications": "Email ඇණවුම් දැනුම්දීම්",
  "Online-payment integration": "මාර්ගගත ගෙවීම් සම්බන්ධ කිරීම", "Full e-commerce order system": "සම්පූර්ණ e-commerce ඇණවුම් පද්ධතිය", "Product management": "නිෂ්පාදන කළමනාකරණය", "Order management": "ඇණවුම් කළමනාකරණය", "Order-status tracking": "ඇණවුම් තත්ත්වය නිරීක්ෂණය", "Discount coupons": "වට්ටම් කූපන්", "Promotional offers": "ප්‍රවර්ධන දීමනා",
  "Property showcase": "නවාතැන් ප්‍රදර්ශනය", "Amenities section": "පහසුකම් අංශය", "Booking-inquiry form": "වෙන්කිරීමේ විමසීම් පෝරමය", "Individual room-detail pages": "වෙන වෙනම කාමර විස්තර පිටු", "Property image gallery": "නවාතැන් ඡායාරූප එකතුව", "Seasonal rates": "කාලීන මිල ගණන්", "Special packages": "විශේෂ පැකේජ", "Customer-inquiry management": "පාරිභෝගික විමසීම් කළමනාකරණය", "Google review section": "Google සමාලෝචන අංශය",
  "Full online-booking system": "සම්පූර්ණ මාර්ගගත වෙන්කිරීමේ පද්ධතිය", "Availability calendar": "ලබාගත හැකි දින දර්ශනය", "Booking management": "වෙන්කිරීම් කළමනාකරණය", "Booking-status tracking": "වෙන්කිරීම් තත්ත්වය නිරීක්ෂණය", "Optional multilingual setup": "විකල්ප බහුභාෂා සැකසුම",
  "1 month support": "මාස 1ක සහාය", "2 months support": "මාස 2ක සහාය", "3 months support": "මාස 3ක සහාය",
};

export function PricingTabs() {
  const { language } = useSitePreferences();
  const si = language === "si";
  const [category, setCategory] = useState<"business" | "hotel">("hotel");
  const [packageIndex, setPackageIndex] = useState(0);
  const packages = category === "business" ? businessPackages : hospitalityPackages;
  const selected = packages[packageIndex];
  const hotelDiscountPrice = Math.round(selected.price * 0.85);
  const hotelDiscountFormatted = `LKR ${hotelDiscountPrice.toLocaleString("en-US")}`;

  function chooseCategory(value: "business" | "hotel") {
    setCategory(value);
    setPackageIndex(0);
  }

  return (
    <div className="mx-auto w-full min-w-0 max-w-4xl overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-[0_18px_45px_rgba(20,38,92,0.12)] sm:rounded-3xl sm:shadow-[0_24px_70px_rgba(20,38,92,0.14)]">
      <div className="grid grid-cols-2 border-b border-[var(--border)] bg-[var(--brand-soft)] p-2" role="tablist" aria-label="Website category">
        {(["hotel", "business"] as const).map((item) => (
          <button key={item} role="tab" aria-selected={category === item} onClick={() => chooseCategory(item)} className={category === item ? "brand-gradient min-h-14 min-w-0 rounded-xl px-2 text-sm font-extrabold text-white shadow-md transition sm:px-3 sm:text-base" : "min-h-14 min-w-0 rounded-xl px-2 text-sm font-bold text-[var(--brand-deep)] transition hover:bg-white hover:text-[var(--brand-blue-dark)] sm:px-3 sm:text-base"}>
            {si ? (item === "business" ? "ව්‍යාපාරික වෙබ් අඩවි" : "හෝටල් වෙබ් අඩවි") : (item === "business" ? "Business Websites" : "Hotel Websites")}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 border-b border-[var(--border)] bg-white p-2 sm:p-3" role="tablist" aria-label="Package level">
        {packages.map((item, index) => (
          <button key={item.id} role="tab" aria-selected={packageIndex === index} onClick={() => setPackageIndex(index)} className={packageIndex === index ? "active-package-tab min-h-12 min-w-0 rounded-xl px-1.5 text-xs font-extrabold text-white shadow-md transition sm:px-2 sm:text-base" : "min-h-12 min-w-0 rounded-xl px-1.5 text-xs font-bold text-[var(--text-secondary)] transition hover:bg-[var(--brand-light)] hover:text-[var(--brand-blue-dark)] sm:px-2 sm:text-base"}>
            {si ? ["මූලික", "මධ්‍යම", "උසස්"][index] : item.name.replace("Business ", "").replace("Hotel ", "")}
          </button>
        ))}
      </div>

      <div key={selected.id} role="tabpanel" className="animate-package-in min-w-0 overflow-hidden p-4 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 border-b border-[var(--border)] pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            {selected.recommended ? <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-extrabold text-[var(--brand-blue-dark)]">{si ? "නිර්දේශිතයි" : "Recommended"}</span> : null}
            <h3 className="mt-2 text-3xl font-black text-[var(--brand-navy)] sm:text-4xl">{si ? siText[selected.name] : selected.name}</h3>
            <p className="mt-2 max-w-xl leading-7 text-[var(--text-secondary)]">{si ? siText[selected.description] : selected.description}</p>
          </div>
          <div className="shrink-0 sm:text-right">
            {category === "hotel" ? (
              <div>
                <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-extrabold text-emerald-700">{si ? "15% වට්ටමක්" : "15% OFF"}</span>
                <p className="mt-2 text-lg font-bold text-[var(--text-muted)] line-through decoration-2">{selected.formattedPrice}</p>
                <p className="mt-1 text-3xl font-black text-[var(--brand-blue-dark)] sm:text-4xl">{hotelDiscountFormatted}</p>
                <p className="mt-1 text-xs font-bold text-emerald-700">{si ? "සීමිත කාලයක් සඳහා" : "Limited-time offer"}</p>
              </div>
            ) : <p className="text-3xl font-black text-[var(--brand-blue-dark)] sm:text-4xl">{selected.formattedPrice}</p>}
            <p className="mt-2 max-w-xs text-sm font-semibold text-[var(--text-muted)]">{si ? siText[selected.bestFor] : selected.bestFor}</p>
          </div>
        </div>

        <div className="py-6">
          <h4 className="text-sm font-extrabold uppercase tracking-[0.14em] text-[var(--text-muted)]">{si ? "පැකේජ විස්තර" : "Package details"}</h4>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {selected.features.map((feature) => <li key={feature} className="min-w-0 break-words flex gap-3 rounded-xl bg-[var(--brand-soft)] p-3 text-sm font-semibold leading-6 text-[var(--text-secondary)] transition hover:bg-[var(--brand-light)]"><CheckCircle2 className="mt-0.5 shrink-0 text-[var(--success)]" size={18} /><span className="min-w-0">{si ? (siText[feature] || feature) : feature}</span></li>)}
            <li className="support-period-row flex min-w-0 gap-3 break-words rounded-xl p-3 text-sm font-extrabold leading-6"><CheckCircle2 className="mt-0.5 shrink-0" size={18} /><span className="min-w-0">{si ? siText[selected.supportPeriod] : selected.supportPeriod}</span></li>
          </ul>
        </div>

        <div className="border-t border-[var(--border)] pt-5">
          <Button href="#contact" className="w-full sm:min-h-14 sm:text-base">{si ? "මෙම පැකේජය ගැන අප අමතන්න" : "Contact Us About This Package"}</Button>
        </div>
      </div>
    </div>
  );
}
