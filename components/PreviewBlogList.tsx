'use client';

import { usePreview } from '@/lib/sanity.preview';

type Props = {
  query: string;
};

function PreviewBlogList({ query }: Props) {
  const posts = usePreview(null, query);
  console.log('loading', posts);
  return <div>PrevieBlogList</div>;
}

export default PreviewBlogList;
