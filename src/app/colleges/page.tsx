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
    <div className="py-20 px-8 min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h1 className="text-7xl font-black uppercase tracking-tighter leading-[0.8] mb-6">
                FIND YOUR<br />FUTURE.
              </h1>
              <p className="text-lg opacity-60 uppercase font-medium tracking-tight">
                Explore top-tier institutions, compare placements, and find the perfect academic fit for your journey.
              </p>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold uppercase opacity-40">Total Results</span>
              <p className="text-4xl font-black">{filteredColleges.length}</p>
            </div>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-0 border border-black dark:border-white">
            <div className="p-6 border-b md:border-b-0 md:border-r border-black dark:border-white lg:col-span-2">
              <label className="block text-[10px] font-black uppercase mb-2 opacity-40 tracking-widest">Search</label>
              <input
                name="q"
                type="text"
                placeholder="COLLEGE OR MAJOR..."
                defaultValue={query}
                className="bg-transparent border-none outline-none w-full text-xl uppercase font-black tracking-tighter placeholder:opacity-20"
              />
            </div>

            <div className="p-6 border-b md:border-b-0 md:border-r border-black dark:border-white">
              <label className="block text-[10px] font-black uppercase mb-2 opacity-40 tracking-widest">Location</label>
              <select
                name="location"
                defaultValue={locationFilter}
                className="bg-transparent border-none outline-none w-full text-xl uppercase font-black tracking-tighter appearance-none cursor-pointer"
              >
                <option value="">GLOBAL</option>
                {locations.map(loc => (
                  <option key={loc} value={loc.toLowerCase()}>{loc.toUpperCase()}</option>
                ))}
              </select>
            </div>

            <div className="p-6 border-b md:border-b-0 md:border-r border-black dark:border-white">
              <label className="block text-[10px] font-black uppercase mb-2 opacity-40 tracking-widest">Max Tuition</label>
              <input
                name="maxTuition"
                type="number"
                placeholder="ANY"
                defaultValue={searchParams.maxTuition}
                className="bg-transparent border-none outline-none w-full text-xl uppercase font-black tracking-tighter placeholder:opacity-20"
              />
            </div>

            <button type="submit" className="p-6 bg-black text-white dark:bg-white dark:text-black font-black uppercase text-sm tracking-widest hover:opacity-80 transition-all active:scale-95">
              Refine Search
            </button>
          </form>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
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
            <div className="col-span-full py-32 text-center border border-dashed border-black dark:border-white opacity-40">
              <p className="text-sm font-black uppercase tracking-widest">No institutions match your current filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
