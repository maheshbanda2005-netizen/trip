import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black h-16 flex items-center justify-between px-8 dark:bg-black dark:border-white">
      <Link href="/" className="text-xl font-bold tracking-tighter text-black dark:text-white uppercase">
        HOMEWORK HELP
      </Link>
      <div className="flex gap-8 items-center">
        <Link href="/subjects" className="text-sm font-medium hover:underline text-black dark:text-white uppercase">Subjects</Link>
        <Link href="/questions" className="text-sm font-medium hover:underline text-black dark:text-white uppercase">Questions</Link>
        <Link href="/ask" className="text-sm font-medium hover:underline text-black dark:text-white uppercase">Ask Question</Link>
        <Link href="/profile" className="text-sm font-medium hover:underline text-black dark:text-white uppercase font-bold border border-black dark:border-white px-3 py-1">Profile</Link>
      </div>
    </nav>
  );
}
