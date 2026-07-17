import { CalendarDays, Camera, CreditCard, Hotel } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HospitalityFeature() {
  return (
    <section className="section-pad brand-gradient text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div><h2 className="text-3xl font-black sm:text-5xl">Turn Property Views Into Direct Bookings</h2><p className="mt-4 text-lg leading-8 text-blue-50">Showcase your rooms, facilities and experiences through a professional website designed to increase inquiries and direct reservations.</p><Button href="/hospitality-websites" variant="dark" className="mt-6">Explore Hospitality Websites</Button></div>
        <div className="grid gap-3 sm:grid-cols-2">
          {["Room showcase", "Booking inquiry form", "Availability calendar", "Online payments", "Seasonal offers", "Professional photography"].map((item, i) => {
            const icons = [Hotel, CalendarDays, CalendarDays, CreditCard, Hotel, Camera];
            const Icon = icons[i];
            return <div className="rounded-lg bg-white/12 p-4 font-bold ring-1 ring-white/20" key={item}><Icon className="mb-3" />{item}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
