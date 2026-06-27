import Button from "@/components/Button";

export default function KnowledgeGraphPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-8">
      <div className="mb-12 pb-8 border-b border-black dark:border-white">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-2">Knowledge Graph</h1>
        <p className="text-sm opacity-70 uppercase font-medium">Explore conceptual relationships across subjects.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 h-[600px]">
        {/* Navigation / Selection Sidebar */}
        <div className="lg:col-span-1 space-y-6 overflow-y-auto pr-4">
           <div>
             <h3 className="text-xs font-black uppercase tracking-widest mb-4">Select Subject</h3>
             <div className="flex flex-col gap-2">
                {['Mathematics', 'Computer Science', 'Physics', 'AI'].map(s => (
                  <button key={s} className={`text-xs font-bold uppercase text-left p-3 border ${s === 'Computer Science' ? 'bg-black text-white dark:bg-white dark:text-black' : 'border-black/10 dark:border-white/10'} hover:border-black dark:hover:border-white transition-all`}>
                    {s}
                  </button>
                ))}
             </div>
           </div>

           <div className="border border-black dark:border-white p-6">
             <h3 className="text-xs font-black uppercase tracking-widest mb-4">Focused Node</h3>
             <h4 className="text-lg font-black uppercase mb-2">Java OOP</h4>
             <p className="text-[10px] opacity-60 uppercase leading-relaxed mb-4">
                Object-Oriented Programming principles including Inheritance, Polymorphism, and Abstraction.
             </p>
             <Button variant="secondary" className="w-full">View Related Questions</Button>
           </div>
        </div>

        {/* Visual Graph Area (Mocked) */}
        <div className="lg:col-span-3 border-2 border-black dark:border-white relative overflow-hidden bg-gray-50 dark:bg-zinc-900 flex items-center justify-center group">
           {/* Concept Nodes - Mocked as styled divs */}
           <div className="relative w-full h-full flex items-center justify-center">
              {/* Central Node */}
              <div className="z-20 bg-black text-white dark:bg-white dark:text-black px-6 py-3 font-black uppercase text-sm border-2 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
                Java Programming
              </div>

              {/* Connection Lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 dark:opacity-40" stroke="currentColor">
                <line x1="50%" y1="50%" x2="30%" y2="30%" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="70%" y2="30%" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="30%" y2="70%" strokeWidth="2" />
                <line x1="50%" y1="50%" x2="70%" y2="70%" strokeWidth="2" />
                <line x1="30%" y1="30%" x2="20%" y2="20%" strokeWidth="2" />
              </svg>

              {/* Orbiting Nodes */}
              <div className="absolute top-[25%] left-[25%] bg-white dark:bg-black border border-black dark:border-white p-3 text-[10px] font-black uppercase hover:scale-110 transition-transform cursor-pointer">
                Object-Oriented
              </div>
              <div className="absolute top-[25%] right-[25%] bg-white dark:bg-black border border-black dark:border-white p-3 text-[10px] font-black uppercase hover:scale-110 transition-transform cursor-pointer">
                Concurrency
              </div>
              <div className="absolute bottom-[25%] left-[25%] bg-white dark:bg-black border border-black dark:border-white p-3 text-[10px] font-black uppercase hover:scale-110 transition-transform cursor-pointer">
                JVM Internals
              </div>
              <div className="absolute bottom-[25%] right-[25%] bg-white dark:bg-black border border-black dark:border-white p-3 text-[10px] font-black uppercase hover:scale-110 transition-transform cursor-pointer">
                Collections
              </div>
              <div className="absolute top-[15%] left-[15%] bg-white dark:bg-black border border-black dark:border-white p-2 text-[8px] font-black uppercase opacity-50">
                Inheritance
              </div>
           </div>

           {/* Graph Controls */}
           <div className="absolute bottom-6 right-6 flex gap-2">
              <button className="w-10 h-10 bg-white dark:bg-black border border-black dark:border-white flex items-center justify-center font-black">+</button>
              <button className="w-10 h-10 bg-white dark:bg-black border border-black dark:border-white flex items-center justify-center font-black">-</button>
              <button className="w-10 h-10 bg-white dark:bg-black border border-black dark:border-white flex items-center justify-center text-xs">⟲</button>
           </div>

           <div className="absolute top-6 left-6">
              <span className="text-[10px] font-black uppercase bg-black text-white dark:bg-white dark:text-black px-2 py-1">Interactive AI Graph Mode</span>
           </div>
        </div>
      </div>
    </div>
  );
}
