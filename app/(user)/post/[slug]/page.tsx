import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import { PortableTextComponents } from '@/components/PortableTextComponents';
import PostBanner from '@/components/PostBanner';

type Props = {
  params: {
    slug: string;
  };
};

async function SinglePostPage({ params: { slug } }: Props) {
  const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->
    }
    `;

  const post = await client.fetch(query, { slug });

  return (
    <article className="px-5 md:px-10 my-20 max-w-6xl mx-auto">
      <PostBanner post={post} />
      <PortableText
        value={post.body}
        components={PortableTextComponents}
        onMissingComponent={false}
      />
    </article>
  );
}

export default SinglePostPage;

export const revalidate = 60;

export async function generateStaticParams() {
  const querySlug = groq`
  *[_type=="post"] {
    slug
  }
  `;
  const slugs: Post[] = await client.fetch(querySlug);
  return slugs.map((slug) => ({ slug: slug.slug.current }));
}
