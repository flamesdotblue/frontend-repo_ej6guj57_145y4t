import React, { useMemo, useState } from 'react';
import { MessageSquare, Send, ThumbsUp } from 'lucide-react';

const Comment = ({ c, onLike }) => (
  <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-4 bg-white dark:bg-zinc-950">
    <div className="flex items-center justify-between">
      <div className="font-medium text-sm">{c.author}</div>
      <button
        onClick={() => onLike(c.id)}
        className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md border border-zinc-200 dark:border-zinc-800"
        aria-label="Like comment"
      >
        <ThumbsUp className="w-3.5 h-3.5" /> {c.likes}
      </button>
    </div>
    <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{c.content}</p>
    {c.replies && c.replies.length > 0 && (
      <div className="mt-3 pl-4 border-l border-zinc-200 dark:border-zinc-800 space-y-3">
        {c.replies.map((r) => (
          <div key={r.id} className="text-sm">
            <div className="font-medium text-xs">{r.author}</div>
            <p className="text-zinc-700 dark:text-zinc-300">{r.content}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);

const CommentsSection = ({ initialComments = [] }) => {
  const [comments, setComments] = useState(initialComments);
  const [text, setText] = useState('');

  const totalCount = useMemo(() => {
    const replyCount = comments.reduce((acc, c) => acc + (c.replies?.length || 0), 0);
    return comments.length + replyCount;
  }, [comments]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const newComment = {
      id: Math.random().toString(36).slice(2),
      author: 'You',
      content: text.trim(),
      likes: 0,
      replies: []
    };
    setComments([newComment, ...comments]);
    setText('');
  };

  const handleLike = (id) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  return (
    <section id="comments" className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold inline-flex items-center gap-2"><MessageSquare className="w-5 h-5" /> Comments</h2>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">{totalCount} total</span>
      </div>

      <form onSubmit={handleAdd} className="mb-4 flex items-center gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Share your thoughts..."
          className="flex-1 px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
        >
          <Send className="w-4 h-4" /> Post
        </button>
      </form>

      <div className="space-y-3">
        {comments.map((c) => (
          <Comment key={c.id} c={c} onLike={handleLike} />
        ))}
      </div>
    </section>
  );
};

export default CommentsSection;
