import { motion } from 'framer-motion';
import Image from 'next/image';
import urlFor from '@/lib/urlFor';
import ClientSideRoute from '../ClientSideRoute';

function Post({ post }: { post: Post }) {
  return (
    <ClientSideRoute route={`/post/${post.slug.current}`}>
      <motion.div
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="group cursor-pointer mx-2 rounded overflow-hidden shadow-xl shadow-gray-800"
      >
        <div className="relative w-full h-96 drop-shadow-md ">
          <Image
            className="object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-out"
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            fill
          />
          <div className="absolute bottom-0 p-5 w-full flex justify-between items-center bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white ">
            <h3 className="font-bold tracking-wide text-lg">{post.title}</h3>
            <div className="flex space-x-1">
              {post.categories?.map((cat, i) => (
                <p
                  key={i}
                  className="text-center font-bold tracking-wide bg-primary-highlight rounded-full p-2"
                >
                  {cat}
                </p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </ClientSideRoute>
  );
}

export default Post;
