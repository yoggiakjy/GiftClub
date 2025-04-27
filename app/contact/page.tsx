"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { NavbarLinks } from "../lib/data";
import { Orientation } from "../lib/types";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar navbarItems={NavbarLinks} orientation={Orientation.Horizontal} />
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.4,
          stiffness: 400,
          damping: 70,
          type: "spring",
        }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center space-y-4 mt-[10rem]"
      >
        <p className="text-6xl font-light text-zinc-900">Coming Soon!</p>
        <p className="text-2xl font-light text-zinc-900">
          Keep your eyes peeled :D
        </p>
      </motion.div>
    </div>
  );
};

export default page;
