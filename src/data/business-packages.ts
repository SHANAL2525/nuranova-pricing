import type { PricingPackage } from "@/types";

export const businessPackages: PricingPackage[] = [
  {
    id: "business-basic",
    name: "Business Basic",
    price: 39900,
    formattedPrice: "LKR 39,900",
    description: "A professional online presence for small businesses.",
    bestFor: "Small businesses that need a clear, trustworthy website.",
    features: [
      "Up to 5 pages", "Mobile-responsive design", "Home, About, Services/Menu, Gallery and Contact pages",
      "Contact form", "WhatsApp button", "Google Maps", "Social-media links",
      "Basic SEO setup", "First-year standard domain", "First-year hosting", "SSL certificate",
    ],
    supportPeriod: "1 month support",
    ctaLabel: "Request Basic Package",
  },
  {
    id: "business-medium",
    name: "Business Medium",
    price: 49900,
    formattedPrice: "LKR 49,900",
    description: "For receiving online orders or structured customer requests.",
    bestFor: "Restaurants, shops and service businesses that need order flow.",
    features: [
      "Everything in Basic", "Up to 15 products or menu items", "Online-order requests",
      "Shopping cart or order-request form", "Cash-on-delivery option", "Bank-transfer option",
      "Product or menu management", "Admin dashboard", "Customer-detail collection",
      "Email order notifications",
    ],
    supportPeriod: "2 months support",
    ctaLabel: "Request Medium Package",
  },
  {
    id: "business-premium",
    name: "Business Premium",
    price: 69900,
    formattedPrice: "LKR 69,900",
    description: "A full online-selling system with payments and management.",
    bestFor: "Businesses that want e-commerce, payments and dashboards.",
    recommended: true,
    features: [
      "Everything in Medium", "Up to 30 products or menu items", "Online-payment integration",
      "Full e-commerce order system", "Product management", "Order management",
      "Order-status tracking", "Customer reviews with admin approval", "Discount coupons",
      "Promotional offers", "Customer accounts where required", "Sales and order dashboard",
    ],
    supportPeriod: "3 months support",
    ctaLabel: "Request Premium Package",
  },
];
