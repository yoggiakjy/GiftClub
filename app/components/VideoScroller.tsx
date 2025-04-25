import React from "react";
import { motion } from "framer-motion";
import { ShortFormVideo } from "../lib/types";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { PiShareFatFill } from "react-icons/pi";
import { FaCommentDots } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

const VideoScroller = ({ videos }: { videos: ShortFormVideo[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="h-screen overflow-y-scroll no-scrollbar snap-y snap-mandatory"
    >
      {videos.map((video, index) => (
        <section key={index} className="flex w-full justify-center items-end">
          {/* Main video section*/}
          <div className="relative h-screen w-[40rem] snap-start flex justify-center items-center py-3">
            <video
              src={video.videoSrc}
              className="w-full h-full object-cover rounded-2xl"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute bottom-[2rem] left-[1rem] w-[80%] text-neutral-50 space-y-2">
              <p className="text-xl font-semibold">{video.accountName}</p>
              <p className="text-md font-light">
                {video.caption}
                <span className="font-medium ml-2">{video.tags}</span>
              </p>
            </div>
          </div>

          {/* Interaction sidebar section*/}
          <div className="w-[5rem]] h-full flex flex-col justify-center items-center overflow-hidden space-y-3 py-3 ml-3">
            <div className="relative mb-6">
              <Image
                src={video.accountIcon}
                alt={`Account Image ${index}`}
                width={500}
                height={500}
                className="w-13 h-13 rounded-full bg-neutral-50  object-cover"
              />
              <FaPlus className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-2 bg-amber-500 rounded-full p-1.5 text-2xl text-white" />
            </div>

            <div className="flex flex-col justify-center items-center gap-1">
              <FaHeart className="text-5xl bg-zinc-700 rounded-full p-3 text-neutral-200" />
              <p className="text-sm font-medium">
                {numberFormat(video.likeCount)}
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-1">
              <FaCommentDots className="text-5xl bg-zinc-700 rounded-full p-3 text-neutral-200" />
              <p className="text-sm font-medium">
                {numberFormat(video.commentCount)}
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-1">
              <FaBookmark className="text-5xl bg-zinc-700 rounded-full p-3 text-neutral-200" />
              <p className="text-sm font-medium">
                {numberFormat(video.bookmarkCount)}
              </p>
            </div>

            <div className="flex flex-col justify-center items-center gap-1">
              <PiShareFatFill className="text-5xl bg-zinc-700 rounded-full p-3 text-neutral-200" />
              <p className="text-sm font-medium">
                {numberFormat(video.shareCount)}
              </p>
            </div>
          </div>
        </section>
      ))}
    </motion.div>
  );
};

function numberFormat(num: number) {
  if (num >= 1_000_000)
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return num;
}
export default VideoScroller;
