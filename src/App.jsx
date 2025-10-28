import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import MovieHeader from './components/MovieHeader';
import MovieDetails from './components/MovieDetails';
import ReviewsSection from './components/ReviewsSection';
import CommentsSection from './components/CommentsSection';

const mockMovie = {
  title: 'Chrono Drift',
  year: 2024,
  runtime: 126,
  rating: 4.4,
  genres: ['Sci‑Fi', 'Thriller', 'Adventure'],
  tagline: 'A racer discovers time splits with every decision he makes.',
  overview:
    'When a fearless street racer stumbles on a prototype engine that folds time, he must outpace a shadowy syndicate and his own alternate selves across neon cities and desert canyons.',
  director: 'Lina Park',
  writers: ['Lina Park', 'J. Alvarez'],
  cast: ['Kai Ren', "Amara O'Neal", 'Theo Rios', 'Mina Yashida'],
  language: 'English',
  budget: 82000000,
  revenue: 261000000,
  community: { watchlists: 184233, reviews: 9321 },
  poster:
    'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1000&auto=format&fit=crop',
  backdrop:
    'https://images.unsplash.com/photo-1542206395-9feb3edaa68e?q=80&w=1500&auto=format&fit=crop'
};

const mockReviews = [
  {
    id: 'r1',
    author: 'NovaWaves',
    rating: 4,
    date: '2 days ago',
    content:
      'The editing slaps. Action sequences feel like puzzle runs through time. Slightly long, but the third act sticks the landing.'
  },
  {
    id: 'r2',
    author: 'cinemakai',
    rating: 5,
    date: '1 week ago',
    content:
      'Finally, sci‑fi that trusts the audience. The soundtrack goes crazy and the car stunts are practical fire.'
  },
  {
    id: 'r3',
    author: 'orbitline',
    rating: 4,
    date: '3 weeks ago',
    content: 'Inventive worldbuilding and a charismatic lead. Could have trimmed a subplot.'
  }
];

const mockComments = [
  {
    id: 'c1',
    author: 'Juno',
    content: 'That canyon sequence? Chefs kiss. Also the color grading is gorgeous.',
    likes: 12,
    replies: [
      { id: 'c1r1', author: 'Dev', content: 'IMAX was insane for that scene.' }
    ]
  },
  {
    id: 'c2',
    author: 'Mads',
    content: "Felt like a graphic novel brought to life. Need the OST asap.",
    likes: 5,
    replies: []
  }
];

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
        <MovieHeader movie={mockMovie} />
        <div className="mt-8 space-y-8">
          <MovieDetails movie={mockMovie} />
          <ReviewsSection reviews={mockReviews} />
          <CommentsSection initialComments={mockComments} />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-6 text-sm">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <span className="text-zinc-500 dark:text-zinc-400">© {new Date().getFullYear()} hronoX</span>
          <span className="text-zinc-500 dark:text-zinc-400">Movie page • Reviews • Comments</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
