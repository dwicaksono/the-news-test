import { formatDate } from '@/lib/utils';
import React from 'react';
import ModeToggle from '@/components/mode-toggle';
import Search from '@/components/search';

const Navbar = () => {
  return (
    <nav className="px-4 py-2 md:px-16 md:py-10 fixed top-0 bg-white w-full z-20 dark:bg-slate-950">
      <div className=" border-b-[1px] text-xs font-semibold text-slate-400 flex justify-between items-end pb-2">
        {formatDate(new Date())}
        <ModeToggle />
      </div>
      <div className="text-center mt-4 text-wrap">
        <h1 className="uppercase font-bold text-4xl  md:text-6xl lg:text-8xl xl:text-9xl drop-shadow-lg">
          the newstest
        </h1>
      </div>
      <div className="bg-yellow-300 h-2" />
      <div className="flex justify-end">
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
