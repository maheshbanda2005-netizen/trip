import Button from "@/components/Button";
import { trendingQuestions, subjects } from "@/lib/data";
import Link from "next/link";

export default function QuestionsPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 pb-8 border-b border-black dark:border-white">
        <div>
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-2">Questions</h1>
          <p className="text-sm opacity-70 uppercase font-medium">Browse community questions and find answers.</p>
        </div>
        <Link href="/ask">
          <Button>Ask a Question</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1 flex flex-col gap-8">
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest mb-4">Subjects</h3>
            <div className="flex flex-col gap-2">
              <button className="text-xs font-bold uppercase text-left hover:underline">All Subjects</button>
              {subjects.map(s => (
                <button key={s.id} className="text-xs font-medium uppercase text-left opacity-70 hover:opacity-100 hover:underline">
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-widest mb-4">Status</h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-black dark:accent-white" />
                <span className="text-xs font-bold uppercase">Unsolved</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-black dark:accent-white" />
                <span className="text-xs font-bold uppercase">Solved</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-widest mb-4">Difficulty</h3>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-black dark:accent-white" />
                <span className="text-xs font-bold uppercase">Easy</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-black dark:accent-white" />
                <span className="text-xs font-bold uppercase">Medium</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-black dark:accent-white" />
                <span className="text-xs font-bold uppercase">Hard</span>
              </label>
            </div>
          </div>
        </div>

        {/* Questions List */}
        <div className="lg:col-span-3">
          <div className="flex flex-col gap-6">
            {trendingQuestions.map((q) => (
              <div key={q.id} className="border border-black dark:border-white p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-2">
                    <span className="text-[10px] bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 font-bold uppercase">
                      {q.topic}
                    </span>
                    <span className={`text-[10px] border border-black dark:border-white px-2 py-0.5 font-bold uppercase ${q.status === 'solved' ? 'bg-green-100 dark:bg-green-900' : ''}`}>
                      {q.status}
                    </span>
                  </div>
                  <span className="text-[10px] opacity-50 font-bold uppercase">{new Date(q.createdAt).toLocaleDateString()}</span>
                </div>
                <Link href={`/questions/${q.id}`}>
                  <h2 className="text-2xl font-black uppercase tracking-tight mb-3 hover:underline">{q.title}</h2>
                </Link>
                <p className="text-xs opacity-70 uppercase mb-6 line-clamp-2">{q.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <span className="text-[10px] font-bold uppercase">{q.views} Views</span>
                    <span className="text-[10px] font-bold uppercase">2 Answers</span>
                  </div>
                  <div className="flex gap-1">
                    {q.tags.map(tag => (
                      <span key={tag} className="text-[9px] opacity-50 font-bold uppercase">#{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button variant="secondary">Load More Questions</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
