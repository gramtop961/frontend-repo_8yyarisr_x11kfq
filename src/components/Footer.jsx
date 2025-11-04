import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500" />
              <span className="font-semibold">AIVibe</span>
            </div>
            <p className="mt-2 text-sm text-black/70 dark:text-white/70">Powered by AI • Minimal, modern, and fast.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a href="#" className="hover:text-blue-600 transition">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition">Terms of Service</a>
            <a href="#" className="hover:text-blue-600 transition">Contact Us</a>
            <a href="#" className="hover:text-blue-600 transition">About Us</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition"><Linkedin className="h-5 w-5" /></a>
            <a href="#" aria-label="GitHub" className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition"><Github className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
