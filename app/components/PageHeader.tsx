import React from "react";
import { motion } from "framer-motion";
const PageHeader = ({
  headline,
  subline,
  className,
}: {
  headline: string;
  subline: string;
  className?: string;
}) => {
  return (
    <div
      className={`${className} flex flex-col space-y-8 w-full px-[6rem] py-[5rem]`}
    >
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
        className="text-6xl font-medium text-zinc-800"
      >
        {headline}
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
        className="max-w-3xl text-3xl font-light text-zinc-800"
      >
        {subline}
      </motion.p>
      <div className="w-full h-[1px] border-b border-zinc-800 mt-[3rem]" />
    </div>
  );
};

export default PageHeader;
