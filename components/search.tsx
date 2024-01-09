'use client';

import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import queryString from 'query-string';
const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [search, setSearch] = useState(query || '');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (!!search) {
        const newUrl = queryString.stringify({ q: search });
        router.push(`?${newUrl}`, { scroll: false });
      } else {
        router.push('/', { scroll: false });
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, router, searchParams, query]);

  return (
    <div className="mt-6 flex items-center border py-1 px-4 text-sm w-full lg:w-1/3">
      <Input
        placeholder="search"
        className="border-none outline-none px-0 py-0 ring-0 focus:ring-0 drop-shadow-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchIcon className="text-slate-400 cursor-none w-4" />
    </div>
  );
};

export default Search;
