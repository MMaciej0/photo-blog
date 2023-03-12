import Banner from '@/components/Banner';
import BlogList from '@/components/BlogList';
import Navbar from '@/components/Navbar';
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
    <main className="no-scrollbar snap-y snap-mandatory h-screen overflow-y-scroll bg-gradient-to-b from-white to-[#101b68]">
      <div className="snap-start">
        <Navbar />
        <Banner />
      </div>
      <div className="max-w-7xl h-screen mx-auto snap-start">
        <BlogList posts={posts} categories={categories} videos={videos} />
      </div>
    </main>
  );
}
