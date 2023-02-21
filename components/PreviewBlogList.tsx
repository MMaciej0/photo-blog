'use client';

import { usePreview } from '@/lib/sanity.preview';
import Post from './Post';

type Props = {
  postsQuery: string;
};

function PreviewBlogList({ postsQuery }: Props) {
  const posts = usePreview(null, postsQuery);
  return (
    <div className="container mx-auto my-16">
      <div className="grid lg:grid-cols-2 gap-12">
        {posts.map((post: Post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default PreviewBlogList;
