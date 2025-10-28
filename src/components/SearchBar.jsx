import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [q, setQ] = useState('');

  const submit = (e) => {
    e.preventDefault();
    onSearch?.(q.trim());
  };

  return (
    <form onSubmit={submit} className="w-full">
      <div className="relative group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 group-focus-within:text-zinc-600 dark:group-focus-within:text-zinc-300" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search titles, people, lists..."
          className="w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 outline-none focus:ring-2 ring-blue-500/40 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400"
        />
      </div>
    </form>
  );
};

export default SearchBar;
