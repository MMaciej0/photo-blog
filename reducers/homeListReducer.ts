type updatePrimitivePayload = {
  stateField: string;
  value: string | number | boolean;
};

type ActionTypes =
  | {
      type: 'UPDATE_PRIMITIVE';
      payload: updatePrimitivePayload;
    }
  | { type: 'FILTER_POSTS' }
  | { type: 'SEARCH' };

export const homeListReducer = (state: HomePageState, action: ActionTypes) => {
  switch (action.type) {
    case 'UPDATE_PRIMITIVE':
      return {
        ...state,
        searchValue: '',
        [action.payload.stateField]: action.payload.value,
      };

    case 'FILTER_POSTS':
      return filterPostsByCategory(state);

    case 'SEARCH':
      if (state.searchValue) {
        if (state.selectedTab === 'posts') {
          if (state.selectedCategory.toLowerCase() === 'all posts') {
            return {
              ...state,
              filteredPosts: state.allPosts.filter((post) =>
                post.title
                  .toLowerCase()
                  .includes(state.searchValue.toLowerCase())
              ),
            };
          } else {
            // selected category !== all posts
            return {
              ...state,
              filteredPosts: state.allPosts
                .filter((post) =>
                  post.categories.includes(state.selectedCategory)
                )
                .filter((post) =>
                  post.title
                    .toLowerCase()
                    .includes(state.searchValue.toLowerCase())
                ),
            };
          }
        } else if (state.selectedTab === 'videos') {
          return {
            ...state,
            filteredVideos: state.allVideos.filter((video) =>
              video.title
                .toLowerCase()
                .includes(state.searchValue.toLowerCase())
            ),
          };
        }
      } else {
        // no seach value
        if (state.selectedTab === 'posts') {
          return filterPostsByCategory(state);
        } else if (state.selectedTab === 'videos') {
          return { ...state, filteredVideo: state.allVideos };
        }
      }

    default:
      throw new Error('no matching action');
  }
};

const filterPostsByCategory = (state: HomePageState) => {
  if (state.selectedCategory.toLowerCase() !== 'all posts') {
    return {
      ...state,
      filteredPosts: state.allPosts.filter((post) =>
        post.categories.includes(state.selectedCategory)
      ),
    };
  } else {
    return {
      ...state,
      filteredPosts: state.allPosts,
    };
  }
};
