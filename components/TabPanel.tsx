'use client';
import { useState } from 'react';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useClickOutside } from '@/hooks/useClickOutside';

function TabPanel({ categories }: { categories: CategoryDropDown[] }) {
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [showPostOptions, setShowPostOptions] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All Posts');

  const domNode = useClickOutside(() => {
    setShowPostOptions(false);
  });

  return (
    <div className="px-8 sm:px:0 py-6 mb-20 z-50">
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
            <span>
              <ChevronDownIcon
                onClick={() => setShowPostOptions(!showPostOptions)}
                className={`post-chevron w-6 ml-6 stroke-2 hover:text-primary-green transition duration-300 ${
                  showPostOptions && 'rotate-180 text-primary-green'
                }`}
              />
            </span>
          </button>
          {showPostOptions && (
            <ul
              ref={domNode}
              className="text-lg z-50 absolute w-full bg-white border-b-primary-green border-b-4 border-solid"
            >
              <li
                onClick={(e) =>
                  setSelectedCategory((e.target as HTMLElement).innerText)
                }
                className={`z-50 p-4 tracking-wide cursor-pointer hover:bg-primary-green/20 ${
                  selectedCategory.toLowerCase() === 'all posts' &&
                  'bg-primary-green/50 hover:bg-primary-green/50'
                }`}
              >
                All Posts
              </li>
              {categories.map((item) => (
                <li
                  key={item._id}
                  onClick={(e) =>
                    setSelectedCategory((e.target as HTMLElement).innerText)
                  }
                  className={`z-50 p-4 tracking-wide cursor-pointer hover:bg-primary-green/20 ${
                    selectedCategory.toLowerCase() ===
                      item.title.toLowerCase() &&
                    'bg-primary-green/50 hover:bg-primary-green/50'
                  }`}
                >
                  {item.title}
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
