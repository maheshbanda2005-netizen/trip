import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black h-16 flex items-center justify-between px-8 dark:bg-black dark:border-white">
      <Link href="/" className="text-xl font-bold tracking-tighter text-black dark:text-white uppercase">
        EduNavigator AI
      </Link>
      <div className="flex gap-8 items-center">
        <Link href="/explore" className="text-sm font-medium hover:underline text-black dark:text-white uppercase">Explore</Link>
        <Link href="/colleges" className="text-sm font-medium hover:underline text-black dark:text-white uppercase">Colleges</Link>
        <Link href="/accommodations" className="text-sm font-medium hover:underline text-black dark:text-white uppercase">Stays</Link>
        <Link href="/planner" className="text-sm font-medium hover:underline text-black dark:text-white uppercase">Planner</Link>
      </div>
    </nav>
  );
}
