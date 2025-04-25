"use client";
import { FaMapLocationDot, FaClock } from "react-icons/fa6";
import { DynamicRestaurant } from "../lib/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";

const RestaurantPageHero = ({ page }: { page: DynamicRestaurant }) => {
  return (
    <div>
      <motion.div
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
        className="relative w-full h-[2rem] mt-[4rem]"
      >
        <Link
          href={"/explore"}
          className="absolute top-0 left-[3rem] flex justify-center items-center gap-2 text-xl text-zinc-800 font-light"
        >
          <IoArrowBack />
          Back
        </Link>
      </motion.div>

      <div className="flex w-full px-[3rem] mt-[1rem]">
        <div className="w-full flex flex-col">
          <div className="flex flex-col justify-start items-between w-full h-full text-zinc-800 space-y-8 ">
            <div className="flex flex-col justify-start items-start h-full gap-4">
              <motion.p
                initial={{ scale: 0, y: 30, opacity: 0 }}
                whileInView={{ scale: 1, y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  stiffness: 300,
                  damping: 70,
                  type: "spring",
                }}
                viewport={{ once: true }}
                className="text-7xl "
              >
                {page.title}
              </motion.p>

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
                className="flex justify-start items-center gap-3"
              >
                <FaMapLocationDot className="text-zinc-700 text-3xl" />
                <p className="text-lg font-medium">{page.location}</p>
              </motion.div>

              <motion.div
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
                className="flex justify-start items-center gap-3"
              >
                <FaClock className="text-zinc-700 text-[27px]" />
                <p className="text-lg font-medium">{page.openingHours}</p>
              </motion.div>
            </div>

            <div className="flex justify-start items-end gap-8">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7,
                  stiffness: 400,
                  damping: 70,
                  type: "spring",
                }}
                viewport={{ once: true }}
                className="flex justify-center items-center w-[8rem] h-[4rem] rounded-lg bg-sky-200"
              >
                <p className="text-xl font-semibold">
                  {page.vouchers[0].discount}
                </p>
              </motion.div>
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="w-[15rem] h-[4rem] border rounded-lg hover:-translate-y-1 hover:border-sky-600 hover:text-sky-800 hover:bg-sky-50 cursor-pointer transition duration-300 ease-in-out"
              >
                <p className="text-xl font-light">Redeem Now</p>
              </motion.button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end items-end">
          <motion.div
            initial={{ scale: 0, rotate: 10, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
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
            className="w-[55rem] h-[30rem] overflow-hidden rounded-3xl"
          >
            <Image
              src={page.image}
              alt={page.title}
              width={1000}
              height={1000}
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPageHero;
