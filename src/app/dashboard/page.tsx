import Button from "@/components/Button";
import { trendingQuestions } from "@/lib/data";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-8">
      <h1 className="text-5xl font-black uppercase tracking-tighter mb-12">Learning Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="border border-black dark:border-white p-8">
          <h3 className="text-xs font-black uppercase tracking-widest mb-4 opacity-50">AI Help Used</h3>
          <p className="text-5xl font-black italic">14</p>
          <p className="text-[10px] font-bold uppercase mt-2">Questions solved with AI Assistant</p>
        </div>
        <div className="border border-black dark:border-white p-8 bg-black text-white dark:bg-white dark:text-black">
          <h3 className="text-xs font-black uppercase tracking-widest mb-4 opacity-50">Study Streak</h3>
          <p className="text-5xl font-black italic">12 🔥</p>
          <p className="text-[10px] font-bold uppercase mt-2">Days of active learning</p>
        </div>
        <div className="border border-black dark:border-white p-8">
          <h3 className="text-xs font-black uppercase tracking-widest mb-4 opacity-50">Goal Progress</h3>
          <p className="text-5xl font-black italic">75%</p>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 mt-4">
            <div className="w-3/4 h-full bg-black dark:bg-white"></div>
          </div>
        </div>
        <div className="border border-black dark:border-white p-8">
          <h3 className="text-xs font-black uppercase tracking-widest mb-4 opacity-50">Exam Readiness</h3>
          <p className="text-5xl font-black italic">B+</p>
          <p className="text-[10px] font-bold uppercase mt-2">Predictive AI Score</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          {/* AI Tutor Personalized Advice */}
          <section className="bg-black text-white dark:bg-white dark:text-black p-8">
            <div className="flex items-center gap-4 mb-6">
               <span className="text-3xl">🧠</span>
               <div>
                 <h2 className="text-xl font-black uppercase tracking-tight">Personal AI Tutor</h2>
                 <p className="text-[10px] font-bold uppercase opacity-60 italic">Based on your learning history</p>
               </div>
            </div>
            <div className="border-l-4 border-white/20 dark:border-black/20 pl-6 py-2">
              <p className="text-sm font-bold uppercase leading-relaxed mb-4">
                &quot;Hi Sarah, I noticed you struggled with <span className="underline italic">Synchronization</span> in Java last week. I&apos;ve added a quick refresher module to your plan today before we dive into the new Threads exercises.&quot;
              </p>
              <div className="flex gap-4">
                <button className="text-[10px] font-black uppercase bg-white text-black dark:bg-black dark:text-white px-4 py-2">Start Refresher</button>
                <button className="text-[10px] font-black uppercase border border-white/40 dark:border-black/40 px-4 py-2 hover:bg-white/10 dark:hover:bg-black/10 transition-all">Dismiss</button>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase tracking-tight mb-6">Learning Analytics & Predictive Insights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="border border-black dark:border-white p-6">
                 <h4 className="text-[10px] font-black uppercase mb-4 opacity-50">Topic Mastery</h4>
                 <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-[10px] font-black uppercase mb-1">
                        <span>Calculus</span>
                        <span>88%</span>
                      </div>
                      <div className="w-full h-1 bg-gray-100 dark:bg-gray-800"><div className="w-[88%] h-full bg-black dark:bg-white"></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] font-black uppercase mb-1">
                        <span>Java Concurrency</span>
                        <span>42%</span>
                      </div>
                      <div className="w-full h-1 bg-gray-100 dark:bg-gray-800"><div className="w-[42%] h-full bg-black dark:bg-white"></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] font-black uppercase mb-1">
                        <span>RAG Architecture</span>
                        <span>65%</span>
                      </div>
                      <div className="w-full h-1 bg-gray-100 dark:bg-gray-800"><div className="w-[65%] h-full bg-black dark:bg-white"></div></div>
                    </div>
                 </div>
               </div>
               <div className="border border-black dark:border-white p-6 flex flex-col justify-between">
                 <div>
                    <h4 className="text-[10px] font-black uppercase mb-4 opacity-50">Predictive Grade Trend</h4>
                    <div className="h-24 flex items-end gap-2 px-2">
                       <div className="flex-1 bg-gray-200 h-8"></div>
                       <div className="flex-1 bg-gray-300 h-12"></div>
                       <div className="flex-1 bg-gray-400 h-16"></div>
                       <div className="flex-1 bg-black dark:bg-white h-20"></div>
                       <div className="flex-1 bg-black/20 dark:bg-white/20 h-22 border-t-2 border-dashed border-black dark:border-white"></div>
                    </div>
                 </div>
                 <p className="text-[9px] font-bold uppercase opacity-50 mt-4 leading-tight">AI predicts an A- for your next midterm based on current trajectory.</p>
               </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase tracking-tight mb-6">Recent AI Interactions</h2>
            <div className="space-y-4">
              {trendingQuestions.slice(0, 2).map(q => (
                <div key={q.id} className="border border-black dark:border-white p-6 bg-black text-white dark:bg-white dark:text-black">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold uppercase opacity-60">AI Step-by-Step Solver</span>
                    <span className="text-[10px] font-bold uppercase">Yesterday</span>
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-tight mb-2">{q.title}</h4>
                  <button className="text-[10px] font-black uppercase underline">View Solution Detail</button>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black uppercase tracking-tight mb-6">Upcoming Deadlines</h2>
            <div className="border border-black dark:border-white p-8">
              <div className="flex items-center gap-6 pb-6 border-b border-black/10 dark:border-white/10">
                <div className="text-center">
                  <span className="block text-xl font-black">15</span>
                  <span className="text-[9px] font-bold uppercase">Feb</span>
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase">Calculus Assignment Due</h4>
                  <p className="text-[10px] font-bold uppercase opacity-50">Mathematics Department</p>
                </div>
              </div>
              <div className="flex items-center gap-6 pt-6">
                <div className="text-center">
                  <span className="block text-xl font-black">18</span>
                  <span className="text-[9px] font-bold uppercase">Feb</span>
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase">Physics Lab Report</h4>
                  <p className="text-[10px] font-bold uppercase opacity-50">Mechanics Module</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="lg:col-span-1">
          <section className="sticky top-24">
            <h2 className="text-2xl font-black uppercase tracking-tight mb-6">Recommended Resources</h2>
            <div className="space-y-4">
              <div className="border border-black dark:border-white p-6 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group">
                <span className="text-[10px] font-bold uppercase opacity-50 group-hover:opacity-100">PDF Guide</span>
                <h4 className="text-xs font-black uppercase mt-1">Advanced Integration Techniques</h4>
              </div>
              <div className="border border-black dark:border-white p-6 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group">
                <span className="text-[10px] font-bold uppercase opacity-50 group-hover:opacity-100">Video Lesson</span>
                <h4 className="text-xs font-black uppercase mt-1">Quantum Mechanics Basics</h4>
              </div>
              <div className="border border-black dark:border-white p-6 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group">
                <span className="text-[10px] font-bold uppercase opacity-50 group-hover:opacity-100">AI Quiz</span>
                <h4 className="text-xs font-black uppercase mt-1">Test your Python knowledge</h4>
              </div>
            </div>
            <Button variant="secondary" className="w-full mt-8">View All Resources</Button>
          </section>
        </div>
      </div>
    </div>
  );
}
