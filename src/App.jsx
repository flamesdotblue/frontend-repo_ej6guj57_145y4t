import React, { useEffect, useState } from 'react';
import HeroSpline from './components/HeroSpline';
import SearchBar from './components/SearchBar';
import TrendingSection from './components/TrendingSection';
import FeatureGrid from './components/FeatureGrid';
import { Sun, Moon } from 'lucide-react';

const App = () => {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = theme === 'dark' || (theme === 'system' && prefersDark);
    root.classList.toggle('dark', isDark);
  }, [theme]);

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-black dark:text-zinc-100 antialiased">
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 dark:bg-black/40 border-b border-zinc-200/60 dark:border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="font-extrabold tracking-tight text-lg">
            hrono<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-fuchsia-500 to-amber-400">X</span>
          </div>
          <div className="flex-1 max-w-xl ml-2">
            <SearchBar onSearch={(q) => console.log('Search:', q)} />
          </div>
          <div className="ml-auto inline-flex items-center gap-2">
            <button
              aria-label="Light mode"
              className={`p-2 rounded-lg border ${theme === 'light' ? 'bg-zinc-100 dark:bg-zinc-900' : 'bg-transparent'} border-zinc-200 dark:border-zinc-800`}
              onClick={() => setTheme('light')}
            >
              <Sun className="w-5 h-5" />
            </button>
            <button
              aria-label="Dark mode"
              className={`p-2 rounded-lg border ${theme === 'dark' ? 'bg-zinc-100 dark:bg-zinc-900' : 'bg-transparent'} border-zinc-200 dark:border-zinc-800`}
              onClick={() => setTheme('dark')}
            >
              <Moon className="w-5 h-5" />
            </button>
            <button
              aria-label="System theme"
              className={`px-3 py-2 rounded-lg border text-sm ${theme === 'system' ? 'bg-zinc-100 dark:bg-zinc-900' : 'bg-transparent'} border-zinc-200 dark:border-zinc-800`}
              onClick={() => setTheme('system')}
            >
              System
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-4 py-6 md:py-10">
        <HeroSpline />
        <TrendingSection />
        <FeatureGrid />

        {/* Community teaser */}
        <section className="mt-16 mb-20">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 md:p-8 bg-gradient-to-br from-blue-500/5 via-fuchsia-500/5 to-amber-500/5">
            <h3 className="text-lg md:text-xl font-semibold">Built for fast, social discovery</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300 max-w-2xl">
              Profiles, follows, watchlists, and shareable collections are baked in. Phase‑1 ships with mock APIs and a clean adapter layer so real backends can plug in without UI rewrites.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#trending" className="px-4 py-2 rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">Start exploring</a>
              <a href="#features" className="px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800">See features</a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-6 text-sm">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <span className="text-zinc-500 dark:text-zinc-400">© {new Date().getFullYear()} hronoX</span>
          <span className="text-zinc-500 dark:text-zinc-400">Gen‑Z design • Light/Dark • Accessible</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
