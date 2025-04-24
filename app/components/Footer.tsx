"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaSquarePhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full px-[1rem]">
      <div className="w-full h-full flex flex-col justify-center items-center rounded-t-4xl bg-[url('/broken-noise.png')] bg-zinc-800 px-[2rem]">
        <MainFooter />

        <div className="h-[0.5px] w-[80%] static bg-white sm:mt-[1rem] lg:mt-[2rem]" />

        <div className="mb-[0.3rem] md:mb-[2rem] mt-[1rem] w-[80vw] font-extralight text-sm flex justify-center items-center md:relative text-neutral-100">
          <p className="mr-[1rem]">Copyright © No Copyright </p>
          <Link
            href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ/"}
            className="underline underline-offset-4"
          >
            CLICK ME
          </Link>
        </div>
      </div>
    </div>
  );
};

const MainFooter = () => {
  return (
    <div className="text-neutral-100 flex-row w-[80vw] h-[13rem] flex justify-between md:space-x-[5rem] space-x-[2rem] mt-[4rem] items-start max-w-7xl">
      <div className="flex md:ml-[2rem]">
        {/* Logo */}
        <Link
          href={"/"}
          className="relative z-20 flex justify-center items-center"
        >
          <motion.div
            initial={{ scale: 0, rotate: -45, opacity: 0 }}
            whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
              ease: "easeInOut",
              stiffness: 200,
              damping: 40,
            }}
            viewport={{ once: true }}
            className="font-extrabold text-3xl text-neutral-100 py-[1rem]"
          >
            GIFTCLUB
          </motion.div>
        </Link>
      </div>

      <div className="flex-row h-full flex justify-start items-start space-x-[4rem] md:space-x-[10rem] lg:pr-[4rem]">
        <div className="flex-col flex justify-start items-start space-y-5 font-body">
          <p className="font-semibold text-lg md:text-2xl">General Links</p>
          <div className="font-light space-y-5 text-md md:text-lg">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        <div className="flex-col flex justify-start items-start space-y-5 font-body">
          <p className="font-semibold text-lg md:text-2xl">Contact Us</p>
          <div className="font-light space-y-5 text-md md:text-lg">
            <div className="flex justify-start items-center space-x-1">
              <MdEmail />{" "}
              <a href="mailto:admin@email.com.au">email@email.com.au</a>
            </div>
            <div className="flex justify-start items-center space-x-1 pt-[6px]">
              <FaSquarePhone />{" "}
              <a href="tel:+61-400-000-000">+61 400 000 000</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
