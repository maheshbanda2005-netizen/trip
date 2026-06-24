import Button from "@/components/Button";
import Card from "@/components/Card";
import { subjects, trendingQuestions, communityStats } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 px-8 border-b border-black dark:border-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="flex-1">
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                SMARTER<br />LEARNING.
              </h1>
              <p className="max-w-xl text-xl opacity-80 uppercase font-medium">
                The AI-powered forum where students ask, experts guide, and community thrives.
                Get step-by-step help for any subject.
              </p>
            </div>
            <div className="flex-1 max-w-md w-full">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="SEARCH FOR QUESTIONS OR TOPICS..."
                  className="w-full bg-transparent border-2 border-black dark:border-white p-4 text-sm font-bold focus:outline-none uppercase"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <span className="text-xl">🔍</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-[10px] font-bold opacity-50 uppercase">Trending:</span>
                <Link href="/questions?q=Calculus" className="text-[10px] font-bold hover:underline uppercase">Calculus</Link>
                <Link href="/questions?q=Python" className="text-[10px] font-bold hover:underline uppercase">Python</Link>
                <Link href="/questions?q=RAG" className="text-[10px] font-bold hover:underline uppercase">AI RAG</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/ask">
              <Button>Ask a Question</Button>
            </Link>
            <Link href="/questions">
              <Button variant="secondary">Browse Forum</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Subject Categories */}
      <section className="py-20 px-8 border-b border-black dark:border-white bg-black/5 dark:bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight">Popular Subjects</h2>
            <Link href="/subjects" className="text-xs font-bold uppercase underline">Explore All</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {subjects.map((subject) => (
              <Link key={subject.id} href={`/questions?subject=${subject.id}`} className="group">
                <div className="border border-black dark:border-white p-8 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all h-full">
                  <div className="text-4xl mb-4">{subject.icon}</div>
                  <h3 className="text-xl font-black uppercase mb-2 tracking-tighter">{subject.name}</h3>
                  <p className="text-xs opacity-70 uppercase leading-relaxed">{subject.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Questions */}
      <section className="py-20 px-8 border-b border-black dark:border-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight">Trending Questions</h2>
            <Link href="/questions" className="text-xs font-bold uppercase underline">View Forum</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trendingQuestions.slice(0, 4).map((q) => (
              <Card
                key={q.id}
                title={q.title}
                description={q.description}
                href={`/questions/${q.id}`}
                footer={`${q.topic} • ${q.status.toUpperCase()} • ${q.views} VIEWS`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Top Experts */}
      <section className="py-20 px-8 border-b border-black dark:border-white bg-black/5 dark:bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight">Top Experts</h2>
            <Link href="/experts" className="text-xs font-bold uppercase underline">View All Experts</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-black dark:border-white p-6 flex items-center gap-4">
              <div className="w-16 h-16 bg-black dark:bg-white shrink-0"></div>
              <div>
                <h3 className="font-black uppercase text-lg">Dr. Aris</h3>
                <p className="text-[10px] font-bold opacity-70 uppercase mb-2">Mathematics Expert</p>
                <div className="flex gap-1">
                  <span className="text-[10px] bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 font-bold uppercase">2.5k Rep</span>
                </div>
              </div>
            </div>
            <div className="border border-black dark:border-white p-6 flex items-center gap-4">
              <div className="w-16 h-16 bg-black dark:bg-white shrink-0"></div>
              <div>
                <h3 className="font-black uppercase text-lg">Prof. Liang</h3>
                <p className="text-[10px] font-bold opacity-70 uppercase mb-2">CS & AI Specialist</p>
                <div className="flex gap-1">
                  <span className="text-[10px] bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 font-bold uppercase">1.8k Rep</span>
                </div>
              </div>
            </div>
            <div className="border border-black dark:border-white p-6 flex items-center gap-4">
              <div className="w-16 h-16 bg-black dark:bg-white shrink-0"></div>
              <div>
                <h3 className="font-black uppercase text-lg">Dr. Sarah J.</h3>
                <p className="text-[10px] font-bold opacity-70 uppercase mb-2">Physics Expert</p>
                <div className="flex gap-1">
                  <span className="text-[10px] bg-black text-white dark:bg-white dark:text-black px-2 py-0.5 font-bold uppercase">1.2k Rep</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 px-8 border-b border-black dark:border-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {communityStats.map((stat, i) => (
              <div key={i} className="flex flex-col border-l-4 border-black dark:border-white pl-6">
                <span className="text-4xl font-black tracking-tighter mb-2">{stat.value}</span>
                <span className="text-[10px] font-bold uppercase opacity-60 tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 bg-black text-white dark:bg-white dark:text-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
            READY TO<br />GET UNSTUCK?
          </h2>
          <p className="max-w-xl mx-auto text-lg mb-12 opacity-80 uppercase font-medium">
            Join thousands of students and experts. Start your learning journey with our AI-powered community today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/ask">
              <Button variant="secondary" className="bg-white text-black hover:bg-gray-200 border-none">Post Your Question</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
