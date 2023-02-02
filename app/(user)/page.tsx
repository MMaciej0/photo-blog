import BlogList from '@/components/BlogList';
import PreviewBlogList from '@/components/PreviewBlogList';
import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import { previewData } from 'next/headers';
import PreviewSuspense from '../../components/PreviewSuspense';

export default async function Home() {
  const query = groq`
  *[_type == 'post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
  `;

  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(query);
  return (
    <main>
      <BlogList posts={posts} />
    </main>
  );
}
