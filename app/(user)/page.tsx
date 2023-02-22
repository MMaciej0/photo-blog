import Banner from '@/components/Banner';
import BlogList from '@/components/BlogList';
import PreviewBlogList from '@/components/PreviewBlogList';
import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import { previewData } from 'next/headers';
import PreviewSuspense from '../../components/PreviewSuspense';

export const revalidate = 60;

export default async function Home() {
  const postsQuery = groq`
  *[_type == 'post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
  `;
  const categoriesQuery = groq`
    *[_type == 'category'] {
      _id,
    title
  }
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
        <PreviewBlogList postsQuery={postsQuery} />
      </PreviewSuspense>
    );
  }
  const posts = await client.fetch(postsQuery);
  const categories = await client.fetch(categoriesQuery);
  return (
    <main>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <BlogList posts={posts} categories={categories} />
      </div>
    </main>
  );
}
