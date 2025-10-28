import React from 'react';
import { MessageCircle, Trophy, User, List, Share2, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'ChronoX Rating',
    desc: 'A weighted blend of critic scores, community input, and engagement signals to surface trustworthy rankings.'
  },
  {
    icon: MessageCircle,
    title: 'One Review + Threads',
    desc: 'Keep one evolving review per title with nested comments for real conversation.'
  },
  { icon: User, title: 'Social Graph', desc: 'Profiles, follows, and shareable collections to flex your taste.' },
  { icon: List, title: 'Watchlists', desc: 'Track what to watch or read next across movies, series, and books.' },
  { icon: Trophy, title: 'Gamified XP', desc: 'Earn XP, coins, badges, and climb leaderboards as you participate.' },
  { icon: Share2, title: 'Quizzes & Polls', desc: 'Lightweight questions fuel community insight and fun.' },
];

const FeatureGrid = () => {
  return (
    <section id="features" className="mt-16">
      <h2 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Why you’ll vibe with hronoX</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 hover:shadow-lg/50 hover:shadow-fuchsia-500/10 transition"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-fuchsia-500/20 text-blue-600 dark:text-blue-400">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="mt-3 font-semibold text-zinc-900 dark:text-white">{title}</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
