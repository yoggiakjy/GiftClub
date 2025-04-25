import React from "react";

const VideoScroller = ({ videos }: { videos: string[] }) => {
  return (
    <div className="h-screen w-[35rem] overflow-y-scroll no-scrollbar snap-y snap-mandatory">
      {videos.map((videoSrc, index) => (
        <section
          key={index}
          className="h-screen w-full snap-start flex justify-center items-center py-3"
        >
          <video
            src={videoSrc}
            className="w-full h-full object-cover rounded-2xl"
            autoPlay
            loop
            muted
            playsInline
          />
        </section>
      ))}
    </div>
  );
};

export default VideoScroller;
