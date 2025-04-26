"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Orientation } from "../lib/types";
import AuthButton from "./AuthButton";
import CreateOfferButton from "./CreateOfferButton";
import { useAuth } from "../hooks/useAuth";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "@/src/firebase/firebase";

interface NavbarItem {
  title: string;
  link: string;
}

const Navbar = ({
  navbarItems,
  orientation,
}: {
  navbarItems: NavbarItem[];
  orientation: Orientation;
}) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const { user } = useAuth();
  const [isRestaurant, setIsRestaurant] = useState(false);

  // Check if the user is a restaurant whenever the user changes
  useEffect(() => {
    const checkIfRestaurant = async () => {
      if (!user) {
        setIsRestaurant(false);
        return;
      }

      try {
        // Get user data directly from the restaurants collection
        const restaurantRef = doc(firestore, "restaurants", user.uid);
        const restaurantSnap = await getDoc(restaurantRef);

        if (restaurantSnap.exists() && restaurantSnap.data().userType === "restaurant") {
          setIsRestaurant(true);
        } else {
          setIsRestaurant(false);
        }
      } catch (error) {
        console.error("Error checking if user is restaurant:", error);
        setIsRestaurant(false);
      }
    };

    checkIfRestaurant();
  }, [user]);

  console.log("Is restaurant user:", isRestaurant); // For debugging

  return (
    <div
      className={`${
        orientation === Orientation.Horizontal
          ? "w-full px-[1rem] relative"
          : "absolute top-0 left-0 ml-[2rem]"
      }`}
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
        viewport={{ once: true }}
        className={`${
          orientation === Orientation.Horizontal
            ? "flex-row justify-between items-center w-full px-[1rem]"
            : "flex-col justify-center items-start"
        }  flex rounded-2xl py-[0.5rem]`}
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
          className={`${
            orientation === Orientation.Horizontal
              ? "absolute inset-0 flex-row justify-center items-center space-x-2"
              : "flex-col justify-start items-start"
          }  hidden flex-1 text-sm font-medium transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2 `}
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
              className="relative text-zinc-800 text-lg px-4 py-2 "
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
        {/* Authentication */}
        
        <AuthButton orientation={orientation} />
        
      </motion.div>
    </div>
  );
};

export default Navbar;