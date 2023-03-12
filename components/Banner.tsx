'use client';

import { motion } from 'framer-motion';

function Banner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="flex flex-col h-screen w-full"
    >
      <div className="h-full relative">
        <div className="absolute text-center left-0 right-0 top-24">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-400 font-bold text-[4rem] md:text-[6rem] lg:text-[10rem]">
            CYCLING OWN TYPE
          </h1>
          <h4 className="text-center text-primary-black font-extrabold tracking-wide">
            John Doe BLOG & OTHER
          </h4>
        </div>
        <div className="h-full bg-[url('/banner.jpg')] bg-fixed bg-right lg:bg-top bg-no-repeat bg-cover w-full opacity-10"></div>
        <div className="absolute bottom-20 left-0 right-0 text-center">
          <motion.div
            initial={{ opacity: 0, x: '-50vw' }}
            animate={{
              opacity: 1,
              x: 0,
              rotate: 360,
            }}
            transition={{
              type: 'spring',
              mass: 4,
              damping: 5,
              stiffness: 20,
            }}
            className="scroll-info"
          >
            <p>
              Scroll Down <br /> to <br /> Ride With Me
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Banner;
