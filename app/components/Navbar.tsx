"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
interface NavbarItem {
  title: string;
  link: string;
}

const Navbar = ({ navbarItems }: { navbarItems: NavbarItem[] }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="relative w-full px-[1rem]">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
        className="w-full flex justify-between items-center rounded-2xl px-[1rem] py-[0.5rem]"
      >
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
            className="font-extrabold text-3xl text-zinc-800 py-[1rem]"
          >
            GIFTCLUB
          </motion.div>
        </Link>

        {/* Navbar Links */}
        <motion.div
          onMouseLeave={() => setHovered(null)}
          className={
            "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2"
          }
        >
          {navbarItems.map((item, index) => (
            <motion.a
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                duration: 0.6,
                delay: index == 0 ? 0.4 : (index + 1) * 0.3,
                stiffness: 200,
                damping: 60,
              }}
              viewport={{ once: true }}
              onMouseEnter={() => setHovered(index)}
              className="relative text-zinc-800 text-lg px-4 py-2"
              href={item.link}
              key={index}
            >
              {hovered === index && (
                <motion.div
                  layoutId="hovered"
                  className="absolute inset-0 h-full w-full rounded-full bg-amber-50"
                />
              )}
              <span className="relative z-20">{item.title}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Header Button */}
        <Link
          href="/"
          className="flex justify-center items-center relative z-20 w-[10rem] h-[3rem] rounded-full border font-medium hover:bg-neutral-100 transition duration-300 ease-in-out"
        >
          Download App
        </Link>
      </motion.div>
    </div>
  );
};

export default Navbar;
