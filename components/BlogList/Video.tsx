import React from 'react';
import { motion } from 'framer-motion';

function Video({ video }: { video: Video }) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="mx-2 rounded overflow-hidden h-96"
    >
      <iframe
        width="100%"
        height="100%"
        src={video.videoUrl}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </motion.div>
  );
}

export default Video;
