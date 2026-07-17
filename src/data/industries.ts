import type { Industry } from "@/types";

export const industries: Industry[] = [
  { icon: "Hotel", title: "Hotels, Villas & Cabanas", description: "Show rooms, amenities and booking options clearly.", features: ["Room pages", "Booking inquiries", "Photography"], href: "/hospitality-websites" },
  { icon: "Utensils", title: "Restaurants & Cafes", description: "Help customers browse menus and place orders.", features: ["Menus", "WhatsApp orders", "Payments"], href: "/pricing" },
  { icon: "ShoppingBag", title: "Retail Shops", description: "Present products, offers and order options.", features: ["Catalogues", "Cart", "Coupons"], href: "/pricing" },
  { icon: "Sparkles", title: "Salons & Spas", description: "Turn service browsing into appointment inquiries.", features: ["Service pages", "Gallery", "Contact"], href: "/services" },
  { icon: "BriefcaseBusiness", title: "Professional Services", description: "Build trust with clear service and inquiry pages.", features: ["Service pages", "Forms", "Maps"], href: "/services" },
  { icon: "Store", title: "Small & Medium Businesses", description: "A practical web presence for growing local businesses.", features: ["Responsive", "Hosting", "Support"], href: "/pricing" },
];
