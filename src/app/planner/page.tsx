import Button from "@/components/Button";

export default function PlannerPage() {
  const schedule = [
    { day: "Day 01", location: "Hyderabad", activity: "Arrival & Check-in at The Grand Residency" },
    { day: "Day 02", location: "Hyderabad", activity: "Charminar Heritage Walk & Laad Bazaar Exploration" },
    { day: "Day 03", location: "Goa", activity: "Travel to Goa & Beachfront Hostel Check-in" },
    { day: "Day 04", location: "Goa", activity: "Scuba Diving at Grande Island" },
    { day: "Day 05", location: "Goa", activity: "Mangrove Kayaking & Sunset at Palolem" },
  ];

  return (
    <div className="py-12 px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 border-b border-black dark:border-white pb-8 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tight mb-2">Trip Planner</h1>
            <p className="uppercase text-xs font-bold opacity-60 tracking-widest">Southern India Expedition • 5 Days</p>
          </div>
          <Button variant="secondary" className="hidden md:block">Export PDF</Button>
        </header>

        <div className="space-y-px bg-black dark:bg-white border border-black dark:border-white">
          {schedule.map((item) => (
            <div key={item.day} className="bg-white dark:bg-black p-8 flex flex-col md:flex-row gap-8 items-start md:items-center group">
              <div className="text-2xl font-black uppercase tracking-tighter w-24">{item.day}</div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase opacity-50 mb-1">{item.location}</div>
                <div className="text-lg font-bold uppercase tracking-tight group-hover:underline">{item.activity}</div>
              </div>
              <div className="flex gap-4">
                <button className="text-[10px] font-black uppercase border border-black dark:border-white px-2 py-1 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Edit</button>
                <button className="text-[10px] font-black uppercase border border-black dark:border-white px-2 py-1 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">Remove</button>
              </div>
            </div>
          ))}

          <button className="w-full bg-white dark:bg-black p-8 text-center text-xs font-black uppercase hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
            + Add New Activity
          </button>
        </div>

        <div className="mt-12 p-8 border border-black dark:border-white flex flex-col md:flex-row gap-8 items-center justify-between">
          <div>
            <h3 className="text-sm font-black uppercase mb-1">Total Estimated Cost</h3>
            <p className="text-3xl font-black uppercase tracking-tighter">$1,240.00</p>
          </div>
          <Button className="w-full md:w-auto">Confirm & Book All</Button>
        </div>
      </div>
    </div>
  );
}
