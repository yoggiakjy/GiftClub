"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { NavbarLinks, restaurants } from "../lib/data";
import LogOutButton from "../components/logOutButton";

import RestaurantCards from "../components/RestaurantCards";
import { Orientation } from "../lib/types";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center ">
      <Navbar navbarItems={NavbarLinks} orientation={Orientation.Horizontal} />
      <RestaurantCards restaurants={restaurants}/>
      <LogOutButton></LogOutButton>
    </div>
  );
};

export default page;
