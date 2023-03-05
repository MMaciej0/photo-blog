import React from 'react';

function Video({ video }: { video: Video }) {
  return (
    <div className="mx-2 rounded overflow-hidden h-96">
      <iframe
        width="100%"
        height="100%"
        src={video.videoUrl}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Video;
