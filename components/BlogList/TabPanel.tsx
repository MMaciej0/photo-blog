'use client';
import { motion } from 'framer-motion';
import { useState, MouseEvent, ChangeEvent } from 'react';
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useClickOutside } from '@/hooks/useClickOutside';

type PropsType = {
  categories: CategoryDropDown[];
  state: HomePageState;
  updateStateField: (stateField: string, newValue: string) => void;
  filterPosts: () => void;
  search: () => void;
};

function TabPanel({
  categories,
  state,
  updateStateField,
  filterPosts,
  search,
}: PropsType) {
  const [showPostOptions, setShowPostOptions] = useState<boolean>(false);

  const domNode = useClickOutside(() => {
    setShowPostOptions(false);
  });

  const handleSelectCategory = (e: MouseEvent<HTMLLIElement>) => {
    const target = e.currentTarget;
    updateStateField('selectedCategory', target.innerText);
    filterPosts();
    setShowPostOptions(false);
  };

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    updateStateField('searchValue', target.value);
    search();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-8 sm:px:0 py-6 mb-20 z-50"
    >
      <div className="max-w-3xl mx-auto md:w-max grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 items-center">
        <div
          className={`relative group mb-4 border-b-4 border-solid ${
            state.selectedTab === 'posts' && 'border-b-primary-green'
          }`}
        >
          <button
            onClick={() => updateStateField('selectedTab', 'posts')}
            className="w-full py-4 flex items-center justify-center tracking-wider text-lg"
          >
            {state.selectedCategory}
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
                onClick={(e) => handleSelectCategory(e)}
                className={`z-50 p-4 tracking-wide cursor-pointer hover:bg-primary-green/20 ${
                  state.selectedCategory.toLowerCase() === 'all posts' &&
                  'bg-primary-green/50 hover:bg-primary-green/50'
                }`}
              >
                All Posts
              </li>
              {categories.map((item) => (
                <li
                  key={item._id}
                  onClick={(e) => handleSelectCategory(e)}
                  className={`z-50 p-4 tracking-wide cursor-pointer hover:bg-primary-green/20 ${
                    state.selectedCategory.toLowerCase() ===
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
            state.selectedTab === 'videos'
              ? 'border-b-primary-green border-solid'
              : ''
          }`}
        >
          <button
            onClick={() => updateStateField('selectedTab', 'videos')}
            className="w-full py-4 flex items-center justify-center tracking-wider text-lg"
          >
            Videos
          </button>
        </div>
        <div className="group cursor-pointer">
          <label className="flex items-center justify-center group">
            <input
              onChange={(e) => handleSearchInput(e)}
              value={state.searchValue}
              type="text"
              placeholder="seach..."
              className="outline-none border-none sm:text-center text-lg"
            />
            <MagnifyingGlassIcon className="w-6 h-6 stroke-2 group-hover:animate-pulse" />
          </label>
        </div>
      </div>
    </motion.div>
  );
}

export default TabPanel;
