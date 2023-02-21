import Post from './Post';
import TabPanel from './TabPanel';

type Props = {
  posts: Post[];
  categories: CategoryDropDown[];
};

function BlogList({ posts, categories }: Props) {
  return (
    <div className="container mx-auto my-16">
      <TabPanel categories={categories} />
      <div className="grid lg:grid-cols-2 gap-12">
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
