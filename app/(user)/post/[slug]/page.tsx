import { client } from '@/lib/sanity.client';
import urlFor from '@/lib/urlFor';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';
import React from 'react';

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
  console.log(post);

  return (
    <article className="px-5 md:px-10 my-32 max-w-6xl mx-auto">
      <section className="space-y-2 text-white/90">
        <div className="relative h-full md:h-[25vh] flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full blur-md p-10 drop-shadow-2xl">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>

          <section className="z-20 p-5 w-full h-full flex flex-col justify-between bg-primary-black/40 rounded">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold tracking-wide">
                  {post.title}
                </h1>
              </div>
              <p className="font-bold md:ml-8">
                {new Date(post._createdAt).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </div>
            <div className="flex items-end justify-between space-x-2">
              <div className="flex items-end">
                {post.author.image ? (
                  <Image
                    className="rounded-full"
                    src={urlFor(post.author.image).url()}
                    alt={post.author.name}
                    height={40}
                    width={40}
                  />
                ) : null}
                <h3 className="text-lg font-bold">{post.author.name}</h3>
              </div>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories?.map((cat: Category) => (
                  <p
                    key={cat._id}
                    className="font-bold tracking-wide bg-white text-primary-black rounded-full p-2"
                  >
                    {cat.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={post.body} />
    </article>
  );
}

export default SinglePostPage;
