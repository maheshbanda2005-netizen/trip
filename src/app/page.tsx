import Button from "@/components/Button";
import Card from "@/components/Card";
import { destinations, adventures, colleges } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 px-8 border-b border-black dark:border-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
            PLAN YOUR<br />NEXT ESCAPE.
          </h1>
          <p className="max-w-xl text-xl mb-12 opacity-80 uppercase font-medium">
            Discover adventures, book stays, and schedule your journey with Triply.
            Minimalist planning for the modern traveler.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/explore">
              <Button>Explore Adventures</Button>
            </Link>
            <Link href="/colleges">
              <Button variant="secondary">Find Colleges</Button>
            </Link>
            <Link href="/planner">
              <Button variant="secondary">Start Planning</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 px-8 border-b border-black dark:border-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight">Destinations</h2>
            <Link href="/explore" className="text-xs font-bold uppercase underline">View All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.map((dest) => (
              <Card
                key={dest.id}
                title={dest.name}
                description={dest.description}
                href={`/explore?q=${dest.name}`}
                footer={dest.highlights.join(" • ")}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Adventures */}
      <section className="py-20 px-8 border-b border-black dark:border-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight">Adventures</h2>
            <Link href="/explore" className="text-xs font-bold uppercase underline">View All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {adventures.slice(0, 3).map((adv) => (
              <Card
                key={adv.id}
                title={adv.name}
                description={adv.description}
                href={`/adventure/${adv.id}`}
                footer={`${adv.category} • $${adv.price}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Colleges */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight">Colleges</h2>
            <Link href="/colleges" className="text-xs font-bold uppercase underline">View All</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {colleges.slice(0, 3).map((college) => (
              <Card
                key={college.id}
                title={college.name}
                description={college.description}
                href={`/colleges/${college.id}`}
                footer={`${college.location} • $${college.tuition.toLocaleString()}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
