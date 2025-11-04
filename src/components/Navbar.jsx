import { User, Settings } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/60 dark:bg-black/40 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow" />
          <span className="font-semibold tracking-tight text-lg">AIVibe</span>
        </div>
        <nav className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-lg border border-black/10 dark:border-white/10 px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/5 transition">
            <User className="h-4 w-4" /> Login
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 text-sm shadow-md hover:shadow-lg transition">
            Sign Up
          </button>
          <button className="ml-1 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition" aria-label="Settings">
            <Settings className="h-5 w-5" />
          </button>
        </nav>
      </div>
    </header>
  );
}
