'use client';

import { useState } from 'react';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

// type Props = {
//   categories: Category[];
// };

function BlogListNav() {
  return (
    <div className="mb-8 mt-4 px-4 grid grid-cols-1 sm:grid-cols-3 grid-rows-3 sm:grid-rows-1 place-items-center max-w-2xl mx-auto">
      <div className="flex justify-center py-4 w-full cursor-pointer">
        <span className="font-bold">All Posts</span>
        <ChevronDownIcon className="h-6 ml-2 stroke-2" />
      </div>
      <div className="flex justify-center py-4 w-full cursor-pointer">
        <span className="font-bold">Videos</span>
      </div>
      <label className="flex justify-center py-4 w-full cursor-pointer">
        <input
          type="text"
          placeholder="search..."
          className="border-none outline-none sm:text-center"
        />
        <MagnifyingGlassIcon className="h-6" />
      </label>
    </div>
  );
}

export default BlogListNav;
