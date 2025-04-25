"use client";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full h-[70vh] px-[1rem]">
      <div className="w-full h-full flex justify-center items-center rounded-4xl bg-[url('/broken-noise.png')] bg-zinc-800 px-[2rem]">
        <div className="w-[30rem] text-neutral-200 space-y-[2.5rem]">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
              stiffness: 400,
              damping: 70,
              type: "spring",
            }}
            viewport={{ once: true }}
            className="text-6xl "
          >
            Eat out without <span className="text-[#E2725B]">forking out!</span>
          </motion.p>

          <motion.p
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
            className="text-2xl font-light"
          >
            Save up to 50% off the total bill at the best restaurants and bars
            in your city.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.6,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="flex justify-center items-center space-x-6 bg-neutral-200 rounded-full hover:scale-105 transition duration-300 ease-in-out py-3 px-6 mt-[4rem]"
          >
            <p className="text-zinc-800 text-lg font-semibold">
              Get Started Now
            </p>
            <FaArrowRightLong className="rounded-full bg-zinc-800 w-[2.3rem] h-[2.3rem] p-2" />
          </motion.button>
        </div>

        <motion.div
          initial={{ scale: 0, rotate: -90, opacity: 0 }}
          whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            scale: {
              type: "spring",
              visualDuration: 0.7,
              bounce: 0.2,
            },
          }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            y: -12,
            rotate: 2,
          }}
        >
          <Image
            src="/hero_3d.png"
            alt="3D Building Image"
            width={600}
            height={600}
            className="w-[35rem]"
          />
        </motion.div>

        <div className="flex justify-center items-center w-[30rem] text-neutral-200 ">
          <div className="flex flex-col w-[60%] gap-3">
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                stiffness: 400,
                damping: 70,
                type: "spring",
              }}
              viewport={{ once: true }}
              className="text-2xl font-semibold"
            >
              Top Venues
            </motion.p>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.6,
                stiffness: 400,
                damping: 70,
                type: "spring",
              }}
              viewport={{ once: true }}
              className="text-lg font-extralight"
            >
              Whether you&apos;re planning a night out or a special event,
              we&apos;ve got the perfect spot waiting.
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.8,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="flex justify-center items-center space-x-6 bg-neutral-200 rounded-full hover:scale-105 transition duration-300 ease-in-out py-3 px-6 mt-6"
            >
              <p className="text-zinc-800 text-lg font-semibold">
                Check Our Venues
              </p>
              <FaArrowRightLong className="rounded-full bg-zinc-800 w-[2.3rem] h-[2rem] p-2" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
