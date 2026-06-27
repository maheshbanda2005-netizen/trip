import Button from "@/components/Button";

export default function AILabPage() {
  return (
    <div className="h-[calc(100vh-64px)] flex flex-col">
      {/* Top Header */}
      <div className="h-16 border-b border-black dark:border-white px-8 flex items-center justify-between bg-white dark:bg-black">
        <div className="flex items-center gap-6">
           <h1 className="text-xl font-black uppercase tracking-tighter">AI Code Lab</h1>
           <div className="h-6 w-px bg-black/20 dark:bg-white/20"></div>
           <select className="bg-transparent text-[10px] font-black uppercase focus:outline-none cursor-pointer">
              <option>Python 3.12</option>
              <option>Java 21</option>
              <option>Node.js 20</option>
              <option>C++ 20</option>
           </select>
        </div>
        <div className="flex gap-4">
           <button className="text-[10px] font-black uppercase border border-black dark:border-white px-4 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
             Save Snippet
           </button>
           <Button className="h-10 py-0 flex items-center gap-2">
             <span>▶</span> Run Code
           </Button>
        </div>
      </div>

      <div className="flex-grow flex overflow-hidden">
        {/* Editor Area (Mocked) */}
        <div className="flex-grow flex flex-col border-r border-black dark:border-white">
          <div className="flex-grow bg-zinc-50 dark:bg-zinc-900 p-8 font-mono text-sm overflow-auto">
             <div className="opacity-40 select-none">
                <p>1  def find_duplicates(arr):</p>
                <p>2      counts = {"{}"}</p>
                <p>3      duplicates = []</p>
                <p>4      for item in arr:</p>
                <p>5          counts[item] = counts.get(item, 0) + 1</p>
                <p>6          if counts[item] == 2:</p>
                <p>7              duplicates.append(item)</p>
                <p>8      return duplicates</p>
                <p>9  </p>
                <p>10 # AI Test Case</p>
                <p>11 print(find_duplicates([1, 2, 3, 1, 2, 4]))</p>
             </div>
             <div className="mt-8 animate-pulse border-l-2 border-black dark:border-white pl-2">
                <span className="bg-black/10 dark:bg-white/10 px-1 italic text-xs">Waiting for input...</span>
             </div>
          </div>
          {/* Console Area */}
          <div className="h-48 border-t border-black dark:border-white p-6 bg-white dark:bg-black overflow-auto">
             <div className="flex justify-between items-start mb-4">
                <h3 className="text-[10px] font-black uppercase opacity-50">Console Output</h3>
                <button className="text-[8px] font-black uppercase opacity-50 hover:opacity-100">Clear</button>
             </div>
             <p className="text-[10px] font-bold text-green-600 uppercase italic">/usr/bin/python3 main.py</p>
             <p className="text-sm font-mono mt-2 font-bold tracking-tight">{"> [1, 2]"}</p>
          </div>
        </div>

        {/* AI Sidebar */}
        <div className="w-96 flex flex-col bg-white dark:bg-black">
           <div className="p-6 border-b border-black dark:border-white">
              <div className="flex items-center gap-2 mb-4">
                 <span className="text-xl">🤖</span>
                 <h3 className="text-xs font-black uppercase tracking-widest">AI Code Mentor</h3>
              </div>
              <div className="space-y-4">
                 <div className="border border-black dark:border-white p-4 bg-black text-white dark:bg-white dark:text-black">
                    <p className="text-[10px] font-black uppercase mb-2">Complexity Analysis</p>
                    <div className="flex justify-between items-end">
                       <div>
                          <p className="text-[8px] opacity-60 uppercase mb-1">Time</p>
                          <p className="text-lg font-black italic">O(N)</p>
                       </div>
                       <div className="text-right">
                          <p className="text-[8px] opacity-60 uppercase mb-1">Space</p>
                          <p className="text-lg font-black italic">O(N)</p>
                       </div>
                    </div>
                 </div>

                 <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase opacity-50">Optimization Tip</p>
                    <p className="text-[10px] font-bold uppercase leading-relaxed border-l-2 border-black dark:border-white pl-4 italic">
                       Consider using a Set for even faster lookup if the frequency count isn&apos;t required for logic.
                    </p>
                 </div>
              </div>
           </div>

           <div className="p-6 flex-grow overflow-auto space-y-6">
              <section>
                 <h4 className="text-[10px] font-black uppercase mb-4 opacity-50">AI Unit Tests</h4>
                 <div className="space-y-2">
                    {[
                       { name: "Empty List", status: "Pass" },
                       { name: "Single Element", status: "Pass" },
                       { name: "All Duplicates", status: "Pass" },
                    ].map(t => (
                       <div key={t.name} className="flex justify-between items-center text-[10px] font-black uppercase border border-black/10 dark:border-white/10 p-2">
                          <span>{t.name}</span>
                          <span className="text-green-600">✓ {t.status}</span>
                       </div>
                    ))}
                 </div>
              </section>

              <section>
                 <h4 className="text-[10px] font-black uppercase mb-4 opacity-50">Security Audit</h4>
                 <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-600/30">
                    <p className="text-[10px] font-black uppercase text-green-700 dark:text-green-400">✓ Clean</p>
                    <p className="text-[8px] font-bold uppercase opacity-60 mt-1">No buffer overflows or insecure calls detected.</p>
                 </div>
              </section>

              <Button variant="secondary" className="w-full">Export Improved Version</Button>
           </div>
        </div>
      </div>
    </div>
  );
}
