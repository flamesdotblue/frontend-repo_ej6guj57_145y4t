import React, { useMemo, useState } from 'react';
import { Star, Film, Tv, Book, TrendingUp } from 'lucide-react';

const MOCK = {
  Movies: [
    { id: 'm1', title: 'Neon Dreams', year: 2025, rating: 8.7 },
    { id: 'm2', title: 'Quantum Alley', year: 2024, rating: 8.3 },
    { id: 'm3', title: 'Echoes of Orion', year: 2023, rating: 8.1 },
    { id: 'm4', title: 'Midnight Circuit', year: 2022, rating: 7.9 },
  ],
  Series: [
    { id: 's1', title: 'Glitchtown', year: 2025, rating: 8.6 },
    { id: 's2', title: 'Silverline', year: 2024, rating: 8.2 },
    { id: 's3', title: 'Planet Nine', year: 2023, rating: 8.0 },
    { id: 's4', title: 'Delta Node', year: 2022, rating: 7.8 },
  ],
  Books: [
    { id: 'b1', title: 'The Last Archivist', year: 2025, rating: 9.0 },
    { id: 'b2', title: 'City of Fragments', year: 2024, rating: 8.4 },
    { id: 'b3', title: 'Axiom Shore', year: 2023, rating: 8.2 },
    { id: 'b4', title: 'Paper Horizon', year: 2022, rating: 7.7 },
  ],
};

const chipBase =
  'inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm transition';

const TrendingSection = () => {
  const [tab, setTab] = useState('Movies');

  const data = useMemo(() => MOCK[tab] ?? [], [tab]);

  const Icon = tab === 'Movies' ? Film : tab === 'Series' ? Tv : Book;

  return (
    <section id="trending" className="mt-12 md:mt-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-500" />
          <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Trending
          </h2>
        </div>
        <div className="flex items-center gap-2">
          {['Movies', 'Series', 'Books'].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={
                chipBase +
                ' ' +
                (t === tab
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 border-transparent'
                  : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800')
              }
            >
              {t === 'Movies' && <Film className="w-4 h-4" />}
              {t === 'Series' && <Tv className="w-4 h-4" />}
              {t === 'Books' && <Book className="w-4 h-4" />}
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {data.map((item) => (
          <article
            key={item.id}
            className="min-w-[220px] max-w-[240px] rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4 hover:shadow-lg/50 hover:shadow-blue-500/10 transition"
          >
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                <Icon className="w-4 h-4 text-blue-500" />
                <span>{item.year}</span>
              </div>
              <div className="inline-flex items-center gap-1 text-amber-400">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                  {item.rating}
                </span>
              </div>
            </div>
            <h3 className="mt-3 font-semibold text-zinc-900 dark:text-white">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              ChronoX Rating blends critics, community, and engagement signals.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <button className="px-3 py-1.5 text-sm rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
                Review
              </button>
              <button className="px-3 py-1.5 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-200">
                Watchlist
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
