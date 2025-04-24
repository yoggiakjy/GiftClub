"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
interface NavbarItem {
  title: string;
  link: string;
}

const Navbar = ({ navbarItems }: { navbarItems: NavbarItem[] }) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
      className="w-[50rem] flex justify-between items-center bg-zinc-800 rounded-2xl pl-[2rem] pr-[1rem]"
    >
      {/* Logo */}
      <p className="font-normal text-3xl text-neutral-50 py-[1rem]">GiftClub</p>
      <div className="flex pl-[3rem] space-x-[3rem]">
        {navbarItems.map((item, index) => (
          <div className="text-neutral-50 text-lg" key={index}>
            {item.title}
          </div>
        ))}
      </div>
      <Link
        href="/"
        className="w-[10rem] h-[75%] rounded-xl bg-neutral-100 flex justify-center items-center"
      >
        Download App
      </Link>
    </motion.div>
  );
};

export default Navbar;
