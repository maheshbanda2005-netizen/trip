import Card from "@/components/Card";
import { adventures } from "@/lib/data";

export default async function ExplorePage(props: { searchParams: Promise<{ q?: string }> }) {
  const searchParams = await props.searchParams;
  const query = searchParams.q?.toLowerCase() || "";

  const filteredAdventures = adventures.filter(adv =>
    adv.name.toLowerCase().includes(query) ||
    adv.location.toLowerCase().includes(query) ||
    adv.category.toLowerCase().includes(query)
  );

  return (
    <div className="py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl font-black uppercase tracking-tight mb-8">Explore</h1>
          <form className="flex gap-4 border-b border-black dark:border-white pb-4">
            <input
              name="q"
              type="text"
              placeholder="SEARCH ADVENTURES OR DESTINATIONS..."
              defaultValue={query}
              className="bg-transparent border-none outline-none w-full text-lg uppercase font-bold tracking-tight"
            />
            <button type="submit" className="font-bold uppercase text-xs">Search</button>
          </form>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAdventures.map((adv) => (
            <Card
              key={adv.id}
              title={adv.name}
              description={adv.description}
              href={`/adventure/${adv.id}`}
              footer={`${adv.location} • ${adv.category} • $${adv.price}`}
            />
          ))}
          {filteredAdventures.length === 0 && (
            <div className="col-span-full py-20 text-center opacity-50 uppercase font-bold">
              No adventures found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
