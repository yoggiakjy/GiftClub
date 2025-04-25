import React from "react";
import { motion } from "framer-motion";

const VideoScroller = ({ videos }: { videos: string[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="h-screen w-[40rem] overflow-y-scroll no-scrollbar snap-y snap-mandatory"
    >
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
    </motion.div>
  );
};

export default VideoScroller;
