export default function Footer() {
  return (
    <footer className="bg-white border-t border-black py-12 px-8 dark:bg-black dark:border-white mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold tracking-tighter text-black dark:text-white uppercase">
          TRIPLY
        </div>
        <div className="flex gap-8">
          <span className="text-xs text-black dark:text-white uppercase">© 2025 TRIPLY. ALL RIGHTS RESERVED.</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-xs hover:underline uppercase text-black dark:text-white">Instagram</a>
          <a href="#" className="text-xs hover:underline uppercase text-black dark:text-white">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
