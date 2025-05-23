"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { Cuisine } from "../lib/types";
import CuisineCard from "./CuisineCard";

const ExploreSection = ({ cuisines }: { cuisines: Cuisine[] }) => {
  return (
    <div className="w-full px-[4rem] py-[3rem]">
      <ExploreHeader />

      <div className="flex justify-start items-center gap-9 w-full mt-[3rem]">
        {cuisines.map((cuisine) => (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: cuisine.id * 0.15,
              stiffness: 400,
              damping: 70,
              type: "spring",
            }}
            key={cuisine.id}
            className="w-[25rem] hover:scale-102 hover:-translate-y-1 transition duration-300 ease-in-out"
          >
            <CuisineCard cuisine={cuisine} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ExploreHeader = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
          stiffness: 400,
          damping: 70,
          type: "spring",
        }}
        viewport={{ once: true }}
        className="text-4xl font-medium"
      >
        <span className="ml-[2rem]">Explore Restaurants and </span> <br /> Bars
        in Victoria
      </motion.p>
      <Link href={"/explore"} className="flex justify-center items-center ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            stiffness: 400,
            damping: 70,
            type: "spring",
          }}
          viewport={{ once: true }}
          className="flex justify-center items-center space-x-3 px-[1.5rem] py-3 border rounded-full hover:bg-neutral-100 transition duration-300 ease-in-out"
        >
          <p>Explore</p>
          <FaArrowRightLong className="text-lg font-extralight" />
        </motion.div>
      </Link>
    </div>
  );
};
export default ExploreSection;
