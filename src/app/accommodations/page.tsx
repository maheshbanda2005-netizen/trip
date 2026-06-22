import Card from "@/components/Card";
import { accommodations } from "@/lib/data";

export default async function AccommodationsPage() {
  return (
    <div className="py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 border-b border-black dark:border-white pb-8">
          <h1 className="text-4xl font-black uppercase tracking-tight mb-4">Stays</h1>
          <p className="uppercase text-xs font-bold opacity-60 tracking-widest">Hotels • Hostels • Rooms</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {accommodations.map((stay) => (
            <Card
              key={stay.id}
              title={stay.name}
              description={stay.description}
              href={`#`} // Booking logic would go here
              footer={`${stay.type} • ${stay.location} • $${stay.pricePerNight}/night • ${stay.amenities.join(", ")}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
