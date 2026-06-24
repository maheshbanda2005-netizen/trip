import Button from "@/components/Button";
import { trendingQuestions } from "@/lib/data";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-8">
      <h1 className="text-5xl font-black uppercase tracking-tighter mb-12">Learning Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="border border-black dark:border-white p-8">
          <h3 className="text-xs font-black uppercase tracking-widest mb-4 opacity-50">AI Help Used</h3>
          <p className="text-5xl font-black italic">14</p>
          <p className="text-[10px] font-bold uppercase mt-2">Questions solved with AI Assistant</p>
        </div>
        <div className="border border-black dark:border-white p-8">
          <h3 className="text-xs font-black uppercase tracking-widest mb-4 opacity-50">Expert Connects</h3>
          <p className="text-5xl font-black italic">3</p>
          <p className="text-[10px] font-bold uppercase mt-2">1-on-1 sessions completed</p>
        </div>
        <div className="border border-black dark:border-white p-8">
          <h3 className="text-xs font-black uppercase tracking-widest mb-4 opacity-50">Goal Progress</h3>
          <p className="text-5xl font-black italic">75%</p>
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 mt-4">
            <div className="w-3/4 h-full bg-black dark:bg-white"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
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
