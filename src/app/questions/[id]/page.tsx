import Button from "@/components/Button";
import { trendingQuestions, answers, users, subjects } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function QuestionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const question = trendingQuestions.find(q => q.id === id);

  if (!question) {
    notFound();
  }

  const author = users.find(u => u.id === question.authorId);
  const questionAnswers = answers.filter(a => a.questionId === question.id);
  const subject = subjects.find(s => s.id === question.subjectId);

  return (
    <div className="max-w-7xl mx-auto py-12 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Link href="/questions" className="text-xs font-bold uppercase underline mb-8 block">← Back to All Questions</Link>

          <article className="border-b border-black dark:border-white pb-12">
            <div className="flex gap-2 mb-6">
              <span className="text-[10px] bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 font-bold uppercase">
                {subject?.name}
              </span>
              <span className="text-[10px] border border-black dark:border-white px-2 py-0.5 font-bold uppercase">
                {question.topic}
              </span>
              <span className="text-[10px] border border-black dark:border-white px-2 py-0.5 font-bold uppercase">
                {question.difficulty}
              </span>
            </div>

            <h1 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-tight">
              {question.title}
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-black dark:bg-white shrink-0"></div>
              <div>
                <p className="text-xs font-black uppercase">{author?.name}</p>
                <p className="text-[10px] opacity-50 font-bold uppercase">Posted on {new Date(question.createdAt).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none mb-12">
              <p className="text-lg opacity-80 uppercase font-medium leading-relaxed">
                {question.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {question.tags.map(tag => (
                <span key={tag} className="text-[10px] bg-gray-100 dark:bg-gray-800 px-3 py-1 font-bold uppercase italic">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <Button variant="secondary">Upvote ({question.views / 10})</Button>
              <Button variant="secondary">Share</Button>
            </div>
          </article>

          {/* AI Multi-Agent Collaboration Section */}
          <section className="py-12 border-b border-black dark:border-white">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                <h2 className="text-2xl font-black uppercase tracking-tight">AI Multi-Agent Collaboration</h2>
              </div>
              <span className="text-[10px] bg-black text-white dark:bg-white dark:text-black px-2 py-1 font-black uppercase">Active Workflow</span>
            </div>

            {/* Agent Collaboration Map */}
            <div className="mb-12 border-2 border-black dark:border-white p-6 bg-gray-50 dark:bg-zinc-900 overflow-hidden">
               <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
                  <div className="z-10 bg-white dark:bg-black border border-black dark:border-white p-4 text-center w-full md:w-32">
                    <p className="text-[8px] font-black uppercase opacity-50 mb-1">Task Planner</p>
                    <p className="text-[10px] font-black">ORCHESTRATOR</p>
                  </div>
                  <div className="hidden md:block h-0.5 bg-black dark:bg-white flex-1"></div>
                  <div className="z-10 bg-white dark:bg-black border-2 border-black dark:border-white p-4 text-center w-full md:w-32 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                    <p className="text-[8px] font-black uppercase opacity-50 mb-1">Agent 01</p>
                    <p className="text-[10px] font-black text-blue-600 dark:text-blue-400">MATH SOLVER</p>
                  </div>
                  <div className="hidden md:block h-0.5 bg-black dark:bg-white flex-1"></div>
                  <div className="z-10 bg-white dark:bg-black border-2 border-black dark:border-white p-4 text-center w-full md:w-32 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
                    <p className="text-[8px] font-black uppercase opacity-50 mb-1">Agent 02</p>
                    <p className="text-[10px] font-black text-green-600 dark:text-green-400">RESEARCH</p>
                  </div>
               </div>
            </div>

            <div className="space-y-6">
              {/* Math Solver Output */}
              <div className="bg-black text-white dark:bg-white dark:text-black p-8 relative overflow-hidden">
                <div className="absolute -right-8 -top-8 text-8xl opacity-10 font-black italic">∑</div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-widest">Math Solver Agent</h3>
                    <p className="text-[10px] opacity-60 font-bold uppercase italic">Status: Completed in 1.2s</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="text-right flex flex-col">
                       <span className="text-[7px] font-black uppercase opacity-50">Accuracy</span>
                       <span className="text-[10px] font-black text-blue-400">99.8%</span>
                    </div>
                    <span className="text-[10px] border border-white/30 dark:border-black/30 px-2 py-0.5">VERIFIED</span>
                  </div>
                </div>
                <div className="space-y-4 text-xs font-bold uppercase leading-loose border-l-2 border-white/20 dark:border-black/20 pl-6">
                  <p>1. Coeffs: a=1, b=-5, c=6.</p>
                  <p>2. Need numbers s.t. x*y=6, x+y=-5.</p>
                  <p>3. Found -2, -3.</p>
                  <p>4. Factor: (x-2)(x-3) = 0.</p>
                </div>
              </div>

              {/* Research Agent Output */}
              <div className="border border-black dark:border-white p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-widest">Research & Citation Agent</h3>
                    <p className="text-[10px] opacity-60 font-bold uppercase italic">Found 3 trusted sources</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex gap-4 items-start">
                    <span className="text-lg">📚</span>
                    <div>
                      <p className="text-[10px] font-black uppercase">Wolfram Alpha: Quadratic Forms</p>
                      <p className="text-[9px] opacity-50 font-bold">Retrieved semantic match for factorization methods.</p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-lg">🔗</span>
                    <div>
                      <p className="text-[10px] font-black uppercase">Khan Academy: Algebra II</p>
                      <p className="text-[9px] opacity-50 font-bold">Standard pedagogical approach used for explanation.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="border-2 border-black dark:border-white p-4 text-[10px] font-black uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                Invoke Code Reviewer
              </button>
              <button className="border-2 border-black dark:border-white p-4 text-[10px] font-black uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                Request Diagram Agent
              </button>
              <button className="border-2 border-black dark:border-white p-4 text-[10px] font-black uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                Generate AI Quiz
              </button>
            </div>
          </section>

          {/* Answers Section */}
          <section className="py-12">
            <h2 className="text-2xl font-black uppercase tracking-tight mb-8">
              {questionAnswers.length} Expert Answers
            </h2>

            <div className="flex flex-col gap-12">
              {questionAnswers.map((answer) => {
                const answerAuthor = users.find(u => u.id === answer.authorId);
                return (
                  <div key={answer.id} className={`pb-12 ${answer.isAccepted ? 'border-l-4 border-black dark:border-white pl-8' : ''}`}>
                    <div className="flex justify-between items-start mb-4">
                       {answer.isAccepted && (
                         <span className="text-[10px] font-black uppercase text-green-600">✓ Accepted Solution</span>
                       )}
                       {/* AI Content Trust Report */}
                       <div className="flex gap-2 ml-auto">
                          <div className="flex flex-col items-end group relative cursor-help">
                             <span className="text-[8px] font-black uppercase opacity-40">Originality</span>
                             <span className="text-[10px] font-black uppercase text-blue-600">92%</span>
                             <div className="absolute top-full mt-2 right-0 bg-black text-white p-3 text-[8px] font-black uppercase z-50 w-48 opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                                AI Similarity Check: Low. Most content appears unique or correctly cited.
                             </div>
                          </div>
                          <div className="flex flex-col items-end group relative cursor-help">
                             <span className="text-[8px] font-black uppercase opacity-40">AI-Content</span>
                             <span className="text-[10px] font-black uppercase text-purple-600">Low</span>
                             <div className="absolute top-full mt-2 right-0 bg-black text-white p-3 text-[8px] font-black uppercase z-50 w-48 opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                                AI Detector: Probability of AI-generated text is below 15%.
                             </div>
                          </div>
                       </div>
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-8 h-8 bg-black dark:bg-white shrink-0"></div>
                      <div>
                        <p className="text-xs font-black uppercase">{answerAuthor?.name} <span className="opacity-50 font-medium">(Expert)</span></p>
                        <p className="text-[10px] opacity-50 font-bold uppercase">{new Date(answer.createdAt).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="prose dark:prose-invert max-w-none mb-6">
                      <p className="text-sm font-medium uppercase leading-relaxed whitespace-pre-wrap">
                        {answer.content}
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <button className="text-[10px] font-black uppercase hover:underline">Helpful ({answer.votes})</button>
                      <button className="text-[10px] font-black uppercase hover:underline">Comment</button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Post Answer Mock */}
            <div className="mt-8 border-2 border-black dark:border-white p-8">
              <h3 className="text-sm font-black uppercase mb-4">Your Answer</h3>
              <textarea
                className="w-full bg-transparent border border-black/20 dark:border-white/20 p-4 text-xs font-bold uppercase focus:outline-none h-32 mb-4"
                placeholder="WRITE YOUR DETAILED SOLUTION HERE..."
              ></textarea>
              <Button>Post Answer</Button>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-12">
            <div className="border border-black dark:border-white p-6">
              <h3 className="text-xs font-black uppercase tracking-widest mb-4">Question Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-[10px] font-bold uppercase">
                  <span className="opacity-50">Views</span>
                  <span>{question.views}</span>
                </div>
                <div className="flex justify-between text-[10px] font-bold uppercase">
                  <span className="opacity-50">Answers</span>
                  <span>{questionAnswers.length}</span>
                </div>
                <div className="flex justify-between text-[10px] font-bold uppercase">
                  <span className="opacity-50">AI Generated</span>
                  <span>1 Solution</span>
                </div>
              </div>
            </div>

            <div className="border border-black dark:border-white p-6">
              <h3 className="text-xs font-black uppercase tracking-widest mb-4">About Author</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-black dark:bg-white shrink-0"></div>
                <div>
                  <p className="text-xs font-black uppercase">{author?.name}</p>
                  <p className="text-[9px] font-bold uppercase opacity-50">{author?.reputation} Rep Points</p>
                </div>
              </div>
              <p className="text-[10px] font-medium uppercase opacity-70 mb-4">{author?.bio || author?.education}</p>
              <button className="w-full border border-black dark:border-white py-2 text-[10px] font-black uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                Follow Author
              </button>
            </div>

            <div className="bg-black text-white dark:bg-white dark:text-black p-6">
              <h3 className="text-xs font-black uppercase tracking-widest mb-4">Need Help Faster?</h3>
              <p className="text-[10px] font-bold uppercase mb-6 opacity-80 leading-relaxed">
                Connect with our subject experts for a live 1-on-1 session.
              </p>
              <Button variant="secondary" className="w-full bg-white text-black dark:bg-black dark:text-white border-none">Book Live Session</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
