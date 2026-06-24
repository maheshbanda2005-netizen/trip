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

          {/* AI Insights Section */}
          <section className="py-12 border-b border-black dark:border-white">
            <div className="flex items-center gap-2 mb-8">
              <span className="text-2xl">🤖</span>
              <h2 className="text-2xl font-black uppercase tracking-tight">AI Assistant Insights</h2>
            </div>

            <div className="bg-black text-white dark:bg-white dark:text-black p-8 mb-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-black uppercase tracking-widest">Step-by-Step Explanation</h3>
                <span className="text-[10px] font-bold opacity-60 uppercase italic">Powered by Gemini 1.5 Pro</span>
              </div>
              <div className="space-y-4 text-xs font-bold uppercase leading-loose">
                <p>1. Identify the coefficients: a=1, b=-5, c=6.</p>
                <p>2. Look for two numbers that multiply to ac (6) and add to b (-5).</p>
                <p>3. The numbers are -2 and -3 because (-2)*(-3)=6 and -2+(-3)=-5.</p>
                <p>4. Rewrite the middle term: x² - 2x - 3x + 6 = 0.</p>
                <p>5. Factor by grouping: x(x-2) - 3(x-2) = 0.</p>
                <p>6. Final factors: (x-2)(x-3) = 0.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="border-2 border-black dark:border-white p-4 text-[10px] font-black uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                Try AI Code Mentor
              </button>
              <button className="border-2 border-black dark:border-white p-4 text-[10px] font-black uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                Visualize with AI Math Solver
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
                    {answer.isAccepted && (
                      <span className="text-[10px] font-black uppercase mb-4 block text-green-600">✓ Accepted Solution</span>
                    )}
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
