import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles, Rocket, Star } from 'lucide-react';

const HeroSpline = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-black">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent dark:from-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.20),transparent_60%)]" />

      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur border border-zinc-200/50 dark:border-white/10 text-xs text-zinc-700 dark:text-zinc-200">
          <Sparkles className="w-4 h-4 text-blue-500" />
          <span>Phase‑1 • Mock APIs • PWA‑friendly</span>
        </div>
        <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          hrono<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-fuchsia-500 to-amber-400">X</span>
        </h1>
        <p className="mt-3 max-w-2xl text-sm md:text-base text-zinc-600 dark:text-zinc-300">
          Discover, rate, and discuss movies, series, and books. One evolving review per title, nested comments, and a gamified layer that makes it fun to share taste.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <a
            href="#trending"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:opacity-90 transition"
          >
            <Rocket className="w-4 h-4" />
            Explore trending
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition text-zinc-800 dark:text-zinc-100"
          >
            <Star className="w-4 h-4 text-amber-400" />
            Why hronoX
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSpline;
