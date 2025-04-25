"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { NavbarLinks, videos } from "../lib/data";
import { Orientation } from "../lib/types";
import VideoScroller from "../components/VideoScroller";
import { motion } from "framer-motion";
import { IoCloudUploadOutline } from "react-icons/io5";
import UploadModal from "../components/UploadModal";

const page = () => {
  return (
    <div className="relative flex justify-center items-start w-full">
      <Navbar navbarItems={NavbarLinks} orientation={Orientation.Vertical} />
      <VideoScroller videos={videos} />
      <UploadButtonModal />
    </div>
  );
};
const UploadButtonModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="absolute top-[1rem] right-[1rem]"
      >
        {/* Header Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex justify-center items-center space-x-2 relative z-20 w-[10rem] h-[3rem] rounded-full border font-medium hover:bg-neutral-100 transition duration-300 ease-in-out"
        >
          <IoCloudUploadOutline className="text-2xl" />
          <p>Upload Video</p>
        </button>
      </motion.div>

      <UploadModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};
export default page;
