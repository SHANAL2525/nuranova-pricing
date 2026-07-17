export type NavItem = { label: string; href: string };
export type IconName =
  | "Building2" | "Utensils" | "ShoppingBag" | "Sparkles" | "BriefcaseBusiness"
  | "Store" | "Globe2" | "CreditCard" | "Hotel" | "LayoutDashboard"
  | "ServerCog" | "Camera" | "ShieldCheck" | "Smartphone" | "MessageCircle"
  | "CalendarDays" | "CheckCircle2" | "Phone" | "Mail" | "MapPin";

export type Industry = {
  icon: IconName;
  title: string;
  description: string;
  features: string[];
  href: string;
};

export type Service = {
  icon: IconName;
  title: string;
  description: string;
  suitableFor: string;
  benefits: string;
  features: string[];
  cta: string;
  href: string;
  badge?: string;
};

export type PricingPackage = {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  description: string;
  bestFor: string;
  recommended?: boolean;
  features: string[];
  supportPeriod: string;
  ctaLabel: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  concept: boolean;
  problem: string;
  overview: string;
  challenge: string;
  strategy: string;
  solution: string;
  features: string[];
  technology: string[];
};

export type FAQ = { question: string; answer: string };
export type ProcessStep = { title: string; description: string };
