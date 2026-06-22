import { adventures } from "@/lib/data";
import Button from "@/components/Button";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function AdventureDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const adventure = adventures.find((a) => a.id === params.id);

  if (!adventure) {
    notFound();
  }

  return (
    <div className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/explore" className="text-xs font-bold uppercase mb-8 block hover:underline">← Back to Explore</Link>

        <div className="border border-black dark:border-white p-12 mb-12">
          <div className="flex justify-between items-start mb-6">
            <span className="text-xs font-bold uppercase tracking-widest bg-black text-white dark:bg-white dark:text-black px-2 py-1">
              {adventure.category}
            </span>
            <span className="text-2xl font-bold tracking-tighter">
              ${adventure.price}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
            {adventure.name}
          </h1>

          <p className="text-xl leading-relaxed mb-12 opacity-80">
            {adventure.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border-t border-black dark:border-white pt-12">
            <div>
              <h3 className="text-sm font-black uppercase mb-4">Location</h3>
              <p className="uppercase font-medium">{adventure.location}</p>
            </div>
            <div>
              <h3 className="text-sm font-black uppercase mb-4">What to expect</h3>
              <ul className="text-sm uppercase space-y-2 font-medium">
                <li>• Professional Guides</li>
                <li>• Equipment Included</li>
                <li>• Safety Briefing</li>
                <li>• Photo package available</li>
              </ul>
            </div>
          </div>

          <Button className="w-full py-6 text-base">Book this adventure</Button>
        </div>

        {/* Dynamic content suggestion */}
        <div className="bg-black text-white dark:bg-white dark:text-black p-12">
          <h2 className="text-3xl font-black uppercase tracking-tight mb-6">Analysis</h2>
          <p className="text-sm uppercase tracking-wide leading-relaxed opacity-80">
            Based on current traveler data, this {adventure.category} adventure in {adventure.location}
            is highly rated for its {adventure.category === 'water' ? 'exhilarating water experience' : 'cultural depth'}.
            Recommended for travelers seeking {adventure.category === 'water' ? 'adrenaline' : 'historical insights'}.
          </p>
        </div>
      </div>
    </div>
  );
}
