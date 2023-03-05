import Banner from '@/components/Banner';
import BlogList from '@/components/BlogList';
import PreviewBlogList from '@/components/PreviewBlogList';
import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import { previewData } from 'next/headers';
import PreviewSuspense from '../../components/PreviewSuspense';

export default async function Home() {
  const postsQuery = groq`
    *[_type=='post']
    {
        ...,
        author->,
        'categories': categories[]->.title
    } | order(_createdAt desc)
  `;
  const categoriesQuery = groq`
    *[_type == 'category'] {
      _id,
    title
  }
  `;
  const videosQuery = groq`
  *[_type == 'video']
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
  const videos = await client.fetch(videosQuery);
  return (
    <main>
      <Banner />
      <div className="max-w-7xl mx-auto">
        <BlogList posts={posts} categories={categories} videos={videos} />
      </div>
    </main>
  );
}
