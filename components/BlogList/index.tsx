'use client';

import { useReducer } from 'react';
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
    <div className="container mx-auto my-16">
      <TabPanel
        categories={categories}
        state={state}
        updateStateField={updateStateField}
        filterPosts={filterPosts}
        search={search}
      />
      {/* todo filtering */}

      <div className="grid lg:grid-cols-2 gap-12">
        {state.selectedTab === 'posts'
          ? state.filteredPosts.map((post: Post) => (
              <Post key={post._id} post={post} />
            ))
          : state.filteredVideos.map((video: Video) => (
              <Video key={video._id} video={video} />
            ))}
      </div>
    </div>
  );
}

export default BlogList;
