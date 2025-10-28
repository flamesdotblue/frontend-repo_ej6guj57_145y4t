import React from 'react';
import { Star } from 'lucide-react';

const Stars = ({ value }) => {
  const full = Math.floor(value);
  return (
    <div className="inline-flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < full ? 'fill-amber-400 text-amber-400' : 'text-zinc-300 dark:text-zinc-700'}`}
        />
      ))}
      <span className="ml-2 text-xs text-zinc-500 dark:text-zinc-400">{value.toFixed(1)}</span>
    </div>
  );
};

const ReviewCard = ({ review }) => (
  <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 bg-white dark:bg-zinc-950">
    <div className="flex items-center justify-between">
      <div className="font-medium">{review.author}</div>
      <Stars value={review.rating} />
    </div>
    <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{review.content}</p>
    <div className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">{review.date}</div>
  </div>
);

const ReviewsSection = ({ reviews }) => {
  return (
    <section id="reviews" className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
