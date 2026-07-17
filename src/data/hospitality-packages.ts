import type { PricingPackage } from "@/types";

export const hospitalityPackages: PricingPackage[] = [
  {
    id: "hotel-basic",
    name: "Hotel Basic",
    price: 34990,
    formattedPrice: "LKR 34,990",
    description: "A professional property website for direct inquiries.",
    bestFor: "Small hotels, villas, cabanas and guest houses.",
    features: [
      "Up to 6 pages", "Mobile-responsive design", "Home, About, Rooms, Gallery and Contact",
      "Property showcase", "Amenities section", "Contact form", "WhatsApp button",
      "Google Maps", "Social links", "Basic SEO setup", "First-year standard domain",
      "First-year hosting", "SSL certificate",
    ],
    supportPeriod: "1 month support",
    ctaLabel: "Request Basic Hotel Package",
  },
  {
    id: "hotel-medium",
    name: "Hotel Medium",
    price: 49990,
    formattedPrice: "LKR 49,990",
    description: "Detailed room pages and structured booking inquiries.",
    bestFor: "Properties that need room pages, seasonal rates and inquiry management.",
    features: [
      "Everything in Basic", "Up to 15 rooms, cabanas or villas", "Booking-inquiry form",
      "Individual room-detail pages", "Property image gallery", "Seasonal rates",
      "Special packages", "Customer-inquiry management", "Admin dashboard", "Google review section",
    ],
    supportPeriod: "2 months support",
    ctaLabel: "Request Medium Hotel Package",
  },
  {
    id: "hotel-premium",
    name: "Hotel Premium",
    price: 119900,
    formattedPrice: "LKR 119,900",
    description: "A complete online-booking experience with payments.",
    bestFor: "Properties that need availability, booking management and online payments.",
    recommended: true,
    features: [
      "Everything in Medium", "Full online-booking system", "Availability calendar",
      "Online-payment integration", "Up to 30 rooms or units", "Customer reviews with admin approval",
      "Discount coupons", "Promotional offers", "Booking management", "Booking-status tracking",
      "Optional multilingual setup",
    ],
    supportPeriod: "3 months support",
    ctaLabel: "Request Premium Hotel Package",
  },
];
