import React from 'react';
import { Star, Clock, Calendar } from 'lucide-react';

const RatingBadge = ({ value }) => (
  <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
    <Star className="w-4 h-4 fill-amber-500/90 text-amber-500" />
    <span className="font-semibold text-sm">{value.toFixed(1)}</span>
  </div>
);

const MovieHeader = ({ movie }) => {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      {/* Backdrop */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${movie.backdrop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px) saturate(1.1)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/10 dark:from-black dark:via-black/70 dark:to-black/10 pointer-events-none" />

      <div className="relative p-4 md:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6">
        <img
          src={movie.poster}
          alt={`${movie.title} poster`}
          className="w-40 h-60 md:w-[180px] md:h-[270px] object-cover rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm"
        />

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              {movie.title}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
              <RatingBadge value={movie.rating} />
              <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" />{movie.year}</span>
              <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" />{movie.runtime} min</span>
              <span className="hidden md:inline">•</span>
              <span className="inline-flex flex-wrap gap-1">
                {movie.genres.map((g) => (
                  <span key={g} className="px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    {g}
                  </span>
                ))}
              </span>
            </div>
          </div>

          <p className="mt-4 text-zinc-700 dark:text-zinc-300 max-w-2xl text-sm md:text-base">
            {movie.tagline}
          </p>

          <div className="mt-4 flex gap-3">
            <a href="#reviews" className="px-4 py-2 rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">Read reviews</a>
            <a href="#comments" className="px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800">Discuss</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieHeader;
