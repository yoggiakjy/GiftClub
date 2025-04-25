"use client";
import React from "react";
import { motion } from "framer-motion";
import { DynamicRestaurant } from "../lib/types";

const RestaurantOverview = ({ page }: { page: DynamicRestaurant }) => {
  return (
    <div className="flex flex-col justify-center items-center border-y mx-[3rem] mt-[3rem] py-[2rem]">
      <div className="w-full flex justify-between items-start text-zinc-800">
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.9,
            stiffness: 400,
            damping: 70,
            type: "spring",
          }}
          viewport={{ once: true }}
          className="text-4xl  "
        >
          Overview
        </motion.p>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1.1,
            stiffness: 400,
            damping: 70,
            type: "spring",
          }}
          viewport={{ once: true }}
          className="text-2xl"
        >
          {page.description}
        </motion.p>
      </div>
    </div>
  );
};

export default RestaurantOverview;
