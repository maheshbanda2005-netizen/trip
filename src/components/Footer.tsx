import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black py-12 px-8 dark:bg-black dark:border-white mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div className="flex flex-col gap-4">
          <div className="text-xl font-bold tracking-tighter text-black dark:text-white uppercase">
            HOMEWORK HELP
          </div>
          <p className="text-xs max-w-xs opacity-70">
            A community-driven learning platform empowering students through expert guidance and advanced AI technology.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-bold uppercase tracking-widest">Platform</h4>
          <nav className="flex flex-col gap-2">
            <Link href="/subjects" className="text-xs hover:underline uppercase">All Subjects</Link>
            <Link href="/questions" className="text-xs hover:underline uppercase">Recent Questions</Link>
            <Link href="/ask" className="text-xs hover:underline uppercase">Ask a Question</Link>
            <Link href="/experts" className="text-xs hover:underline uppercase">Our Experts</Link>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-bold uppercase tracking-widest">Community</h4>
          <nav className="flex flex-col gap-2">
            <a href="#" className="text-xs hover:underline uppercase">Guidelines</a>
            <a href="#" className="text-xs hover:underline uppercase">Success Stories</a>
            <a href="#" className="text-xs hover:underline uppercase">Support</a>
          </nav>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-xs hover:underline uppercase font-bold">Twitter</a>
            <a href="#" className="text-xs hover:underline uppercase font-bold">Discord</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-black/10 dark:border-white/10 flex justify-between items-center">
        <span className="text-[10px] text-black dark:text-white uppercase opacity-50">© 2025 HOMEWORK HELP FORUM. ALL RIGHTS RESERVED.</span>
      </div>
    </footer>
  );
}
