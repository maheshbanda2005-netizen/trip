import Card from "@/components/Card";
import { colleges } from "@/lib/data";

export default async function CollegesPage(props: {
  searchParams: Promise<{
    q?: string,
    location?: string,
    maxTuition?: string,
    minRanking?: string
  }>
}) {
  const searchParams = await props.searchParams;
  const query = searchParams.q?.toLowerCase() || "";
  const locationFilter = searchParams.location?.toLowerCase() || "";
  const maxTuition = searchParams.maxTuition ? parseInt(searchParams.maxTuition) : Infinity;
  const minRanking = searchParams.minRanking ? parseInt(searchParams.minRanking) : 1000;

  const filteredColleges = colleges.filter(college => {
    const matchesQuery = college.name.toLowerCase().includes(query) ||
      college.majors.some(major => major.toLowerCase().includes(query));

    const matchesLocation = !locationFilter || college.location.toLowerCase() === locationFilter;
    const matchesTuition = college.tuition <= maxTuition;
    const matchesRanking = !college.ranking || college.ranking <= minRanking;

    return matchesQuery && matchesLocation && matchesTuition && matchesRanking;
  });

  const locations = Array.from(new Set(colleges.map(c => c.location)));

  return (
    <div className="py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h1 className="text-4xl font-black uppercase tracking-tight mb-8">College Finder</h1>

          <form className="grid grid-cols-1 md:grid-cols-5 gap-6 border-b border-black dark:border-white pb-8">
            <div className="md:col-span-2">
              <label className="block text-[10px] font-bold uppercase mb-2 opacity-50">Search</label>
              <input
                name="q"
                type="text"
                placeholder="COLLEGE OR MAJOR..."
                defaultValue={query}
                className="bg-transparent border-none outline-none w-full text-lg uppercase font-bold tracking-tight"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase mb-2 opacity-50">Location</label>
              <select
                name="location"
                defaultValue={locationFilter}
                className="bg-transparent border-none outline-none w-full text-lg uppercase font-bold tracking-tight appearance-none"
              >
                <option value="">ALL LOCATIONS</option>
                {locations.map(loc => (
                  <option key={loc} value={loc.toLowerCase()}>{loc.toUpperCase()}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase mb-2 opacity-50">Max Tuition</label>
              <input
                name="maxTuition"
                type="number"
                placeholder="ANY"
                defaultValue={searchParams.maxTuition}
                className="bg-transparent border-none outline-none w-full text-lg uppercase font-bold tracking-tight"
              />
            </div>

            <div className="flex items-end">
              <button type="submit" className="w-full bg-black text-white dark:bg-white dark:text-black py-3 font-bold uppercase text-xs tracking-widest hover:opacity-90 transition-opacity">
                Filter
              </button>
            </div>
          </form>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredColleges.map((college) => (
            <Card
              key={college.id}
              title={college.name}
              description={college.description}
              href={`/colleges/${college.id}`}
              footer={`${college.location} • $${college.tuition.toLocaleString()} • Ranking: #${college.ranking || 'N/A'}`}
            />
          ))}
          {filteredColleges.length === 0 && (
            <div className="col-span-full py-20 text-center opacity-50 uppercase font-bold">
              No colleges found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
