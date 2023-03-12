'use client';

import { useReducer } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { homeListReducer } from '@/reducers/homeListReducer';
import Post from './Post';
import TabPanel from './TabPanel';
import Video from './Video';

type Props = {
  posts: Post[];
  categories: CategoryDropDown[];
  videos: Video[];
};

function BlogList({ posts, categories, videos }: Props) {
  const [state, dispatch] = useReducer(homeListReducer, {
    allPosts: posts,
    allVideos: videos,
    selectedTab: 'posts',
    selectedCategory: 'All Posts',
    filteredPosts: posts,
    filteredVideos: videos,
    searchValue: '',
  });

  const updateStateField = (stateField: string, newValue: string) => {
    dispatch({
      type: 'UPDATE_PRIMITIVE',
      payload: {
        stateField: stateField,
        value: newValue,
      },
    });
  };

  const filterPosts = () => {
    dispatch({ type: 'FILTER_POSTS' });
  };

  const search = () => {
    dispatch({ type: 'SEARCH' });
  };

  return (
    <div className="flex flex-col h-full">
      <TabPanel
        categories={categories}
        state={state}
        updateStateField={updateStateField}
        filterPosts={filterPosts}
        search={search}
      />

      <motion.div
        layout
        className="px-4 pb-20 grid lg:grid-cols-2 gap-12 overflow-y-auto no-scrollbar"
      >
        <AnimatePresence>
          {state.selectedTab === 'posts'
            ? state.filteredPosts.map((post: Post) => (
                <Post key={post._id} post={post} />
              ))
            : state.filteredVideos.map((video: Video) => (
                <Video key={video._id} video={video} />
              ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default BlogList;
