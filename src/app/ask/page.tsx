import Button from "@/components/Button";
import { subjects } from "@/lib/data";

export default function AskQuestionPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-8">
      <div className="mb-12 pb-8 border-b border-black dark:border-white">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-2">Ask a Question</h1>
        <p className="text-sm opacity-70 uppercase font-medium">Get help from experts and AI in minutes.</p>
      </div>

      <form className="space-y-12">
        {/* Step 1: Title */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-8 flex items-center justify-center bg-black text-white dark:bg-white dark:text-black font-black text-xs">01</span>
            <h2 className="text-xl font-black uppercase tracking-tight">What is your question?</h2>
          </div>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="E.G., HOW DO I CALCULATE THE VELOCITY OF AN OBJECT?"
              className="w-full bg-transparent border-2 border-black dark:border-white p-4 text-sm font-bold focus:outline-none uppercase"
            />
            <p className="text-[10px] opacity-50 font-bold uppercase">Be specific and imagine you&apos;re asking a person.</p>
          </div>
        </section>

        {/* Step 2: Details */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-8 flex items-center justify-center bg-black text-white dark:bg-white dark:text-black font-black text-xs">02</span>
            <h2 className="text-xl font-black uppercase tracking-tight">Provide more details</h2>
          </div>
          <div className="space-y-2">
            <textarea
              placeholder="DESCRIBE YOUR PROBLEM IN DETAIL. INCLUDE WHAT YOU HAVE TRIED SO FAR..."
              className="w-full bg-transparent border-2 border-black dark:border-white p-4 text-sm font-bold focus:outline-none uppercase h-48"
            ></textarea>
            <div className="flex gap-4">
              <button type="button" className="text-[10px] font-black uppercase border border-black dark:border-white px-4 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                📎 Attach Image/PDF
              </button>
              <button type="button" className="text-[10px] font-black uppercase border border-black dark:border-white px-4 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                {'</>'} Add Code Snippet
              </button>
            </div>
          </div>
        </section>

        {/* Step 3: Categorization */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-8 flex items-center justify-center bg-black text-white dark:bg-white dark:text-black font-black text-xs">03</span>
            <h2 className="text-xl font-black uppercase tracking-tight">Categorize it</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase opacity-50">Select Subject</label>
              <select className="w-full bg-transparent border-2 border-black dark:border-white p-4 text-sm font-bold focus:outline-none uppercase appearance-none cursor-pointer">
                <option value="">SELECT A SUBJECT</option>
                {subjects.map(s => (
                  <option key={s.id} value={s.id}>{s.name.toUpperCase()}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase opacity-50">Difficulty Level</label>
              <div className="flex gap-2">
                {['easy', 'medium', 'hard'].map(level => (
                  <button
                    key={level}
                    type="button"
                    className="flex-1 border-2 border-black dark:border-white py-4 text-[10px] font-black uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Step 4: Tags */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <span className="w-8 h-8 flex items-center justify-center bg-black text-white dark:bg-white dark:text-black font-black text-xs">04</span>
            <h2 className="text-xl font-black uppercase tracking-tight">Add Tags</h2>
          </div>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="E.G., ALGEBRA, PYTHON, NEWTONS-LAWS"
              className="w-full bg-transparent border-2 border-black dark:border-white p-4 text-sm font-bold focus:outline-none uppercase"
            />
            <p className="text-[10px] opacity-50 font-bold uppercase">Press enter to add up to 5 tags.</p>
          </div>
        </section>

        <div className="pt-8 border-t border-black dark:border-white flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex items-center gap-4">
            <input type="checkbox" className="w-4 h-4 accent-black dark:accent-white" id="ai-help" defaultChecked />
            <label htmlFor="ai-help" className="text-xs font-black uppercase cursor-pointer">Get instant AI-generated solution</label>
          </div>
          <Button className="w-full md:w-auto px-12 py-4">Review & Post Question</Button>
        </div>
      </form>
    </div>
  );
}
