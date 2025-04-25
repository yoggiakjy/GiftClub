"use client";
import React from "react";
import { DynamicRestaurant } from "../lib/types";
import { motion } from "framer-motion";

const RestaurantVouchers = ({ page }: { page: DynamicRestaurant }) => {
  return (
    <div className="flex flex-col justify-center items-center border-b mx-[3rem] py-[2rem]">
      <div className="w-full flex justify-between items-start text-zinc-800">
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1,
            stiffness: 400,
            damping: 70,
            type: "spring",
          }}
          viewport={{ once: true }}
          className="text-4xl"
        >
          Vouchers
        </motion.p>
        <div className="flex flex-col justify-center items-center gap-4">
          {page.vouchers.map((voucher, index) => (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 1 + index * 0.2,
                stiffness: 400,
                damping: 70,
                type: "spring",
              }}
              viewport={{ once: true }}
              key={index}
              className="text-xl flex justify-center items-center w-[45rem] rounded-md bg-[#FDF4E3] border gap-6 p-8"
            >
              <p className="text-center w-[8rem] py-3 border border-zinc-800 rounded-xl">
                {voucher.discount}
              </p>
              <p className="font-semibold">Dine in</p>
              <div className="border-dotted border-l-3 border-zinc-800 h-[3rem]" />
              <p>{voucher.voucherTime}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantVouchers;
