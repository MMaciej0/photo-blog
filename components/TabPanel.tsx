'use client';

import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

// type Props = {
//   categories: Category[];
// };

function TabPanel() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [showPostOptions, setShowPostOptions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const postList = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handler = (e: any) => {
      if (!postList.current?.contains(e.target as Node)) {
        setShowPostOptions(false);
      }
    };
    document.body.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  });

  return (
    <div className="px-8 sm:px:0 py-6">
      <div className="max-w-3xl mx-auto md:w-max grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 items-center">
        <div
          className={`relative group mb-4 border-b-4 border-solid ${
            selectedTab === 1 && 'border-b-primary-green'
          }`}
        >
          <button
            onClick={() => setSelectedTab(1)}
            className="w-full py-4 flex items-center justify-center tracking-wider text-lg"
          >
            {selectedCategory}
            <ChevronDownIcon
              onClick={() => setShowPostOptions(!showPostOptions)}
              className={`w-6 ml-6 stroke-2 hover:text-primary-green transition duration-300 ${
                showPostOptions && 'rotate-180 text-primary-green'
              }`}
            />
          </button>
          {showPostOptions && (
            <ul
              ref={postList}
              className="absolute w-full bg-white border-b-primary-green border-b-4 border-solid"
            >
              {['All Posts', 'Trops', 'Gear', 'Local'].map((item, i) => (
                <li
                  key={i}
                  onClick={(e) =>
                    setSelectedCategory((e.target as HTMLElement).innerText)
                  }
                  className={`p-4 tracking-wide cursor-pointer hover:bg-primary-green/20 ${
                    selectedCategory.toLowerCase() === item.toLowerCase() &&
                    'bg-primary-green/50 hover:bg-primary-green/50'
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div
          className={`group mb-4 border-b-4 ${
            selectedTab === 2 ? 'border-b-primary-green border-solid' : ''
          }`}
        >
          <button
            onClick={() => setSelectedTab(2)}
            className="w-full py-4 flex items-center justify-center tracking-wider text-lg"
          >
            Videos
          </button>
        </div>
        <div className="group cursor-pointer">
          <label className="flex items-center justify-center group">
            <input
              type="text"
              placeholder="seach..."
              className="outline-none border-none sm:text-center text-lg"
            />
            <MagnifyingGlassIcon className="w-6 h-6 stroke-2 group-hover:animate-pulse" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default TabPanel;
