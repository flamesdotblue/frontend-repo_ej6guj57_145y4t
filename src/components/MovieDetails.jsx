import React from 'react';
import { Film, Users } from 'lucide-react';

const InfoRow = ({ label, value }) => (
  <div className="flex gap-3 py-2">
    <div className="w-28 shrink-0 text-zinc-500 dark:text-zinc-400 text-sm">{label}</div>
    <div className="text-sm md:text-base">{value}</div>
  </div>
);

const SectionCard = ({ title, children }) => (
  <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-950">
    <h3 className="font-semibold mb-3 flex items-center gap-2">
      <Film className="w-4 h-4" /> {title}
    </h3>
    {children}
  </div>
);

const MovieDetails = ({ movie }) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <SectionCard title="Overview">
        <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {movie.overview}
        </p>
      </SectionCard>

      <SectionCard title="Details">
        <InfoRow label="Director" value={movie.director} />
        <InfoRow label="Writers" value={movie.writers.join(', ')} />
        <InfoRow label="Cast" value={movie.cast.join(', ')} />
        <InfoRow label="Language" value={movie.language} />
        <InfoRow label="Budget" value={`$${movie.budget.toLocaleString()}`} />
        <InfoRow label="Revenue" value={`$${movie.revenue.toLocaleString()}`} />
      </SectionCard>

      <SectionCard title="Community">
        <div className="flex items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <Users className="w-4 h-4" />
            <span className="text-sm">{movie.community.watchlists.toLocaleString()} on watchlists</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <Users className="w-4 h-4" />
            <span className="text-sm">{movie.community.reviews.toLocaleString()} reviews</span>
          </div>
        </div>
      </SectionCard>
    </section>
  );
};

export default MovieDetails;
