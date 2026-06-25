import Button from "@/components/Button";

export default function KnowledgeVaultPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 pb-8 border-b border-black dark:border-white">
        <div>
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-2">Knowledge Vault</h1>
          <p className="text-sm opacity-70 uppercase font-medium">Upload resources to power your RAG-based AI assistant.</p>
        </div>
        <Button>Upload Document</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* RAG Status Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          <div className="border border-black dark:border-white p-8 bg-black text-white dark:bg-white dark:text-black">
            <h3 className="text-xs font-black uppercase tracking-widest mb-6">AI Index Status</h3>
            <div className="space-y-4">
               <div>
                  <div className="flex justify-between text-[10px] font-black uppercase mb-1">
                    <span>Documents Indexed</span>
                    <span>12</span>
                  </div>
                  <div className="w-full h-1 bg-white/20 dark:bg-black/20"><div className="w-full h-full bg-white dark:bg-black"></div></div>
               </div>
               <div>
                  <div className="flex justify-between text-[10px] font-black uppercase mb-1">
                    <span>Vector Store Space</span>
                    <span>2.4 MB</span>
                  </div>
                  <div className="w-full h-1 bg-white/20 dark:bg-black/20"><div className="w-[10%] h-full bg-white dark:bg-black"></div></div>
               </div>
            </div>
            <p className="text-[9px] font-bold uppercase mt-6 opacity-60 leading-tight">
               Your AI tutor uses these documents to provide institution-specific, hallucination-free answers.
            </p>
          </div>

          <div className="border border-black dark:border-white p-8">
            <h3 className="text-xs font-black uppercase tracking-widest mb-4">Supported Formats</h3>
            <div className="flex flex-wrap gap-2">
               {['PDF', 'DOCX', 'PPTX', 'TXT', 'MD'].map(ext => (
                 <span key={ext} className="text-[10px] border border-black/20 dark:border-white/20 px-2 py-1 font-black uppercase">{ext}</span>
               ))}
            </div>
          </div>
        </div>

        {/* Documents List */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-8">Recent Uploads</h2>
          <div className="space-y-4">
            {[
              { name: "Calculus_Syllabus_2025.pdf", size: "1.2 MB", date: "Feb 10, 2024", status: "Indexed" },
              { name: "Java_Concurrency_Notes.docx", size: "850 KB", date: "Feb 08, 2024", status: "Indexed" },
              { name: "Physics_Lab_Manual.pdf", size: "4.5 MB", date: "Feb 05, 2024", status: "Indexed" },
            ].map((doc, i) => (
              <div key={i} className="border border-black dark:border-white p-6 flex items-center justify-between group hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-black dark:border-white flex items-center justify-center font-black text-xs uppercase">
                    {doc.name.split('.').pop()}
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-tight group-hover:underline cursor-pointer">{doc.name}</h4>
                    <p className="text-[10px] font-bold uppercase opacity-50">{doc.size} • Uploaded {doc.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                   <span className="text-[9px] font-black uppercase text-green-600 bg-green-50 dark:bg-green-900/30 px-2 py-1">✓ {doc.status}</span>
                   <button className="text-[10px] font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity">Delete</button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 border-2 border-dashed border-black/20 dark:border-white/20 p-12 flex flex-col items-center justify-center">
            <span className="text-4xl mb-4">📥</span>
            <p className="text-xs font-black uppercase opacity-50 mb-6 text-center max-w-xs">
              Drag and drop your study materials here to expand your AI&apos;s knowledge.
            </p>
            <Button variant="secondary">Browse Files</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
