import React from "react";
import Navbar from "../components/Navbar";
import { NavbarLinks, restaurants } from "../lib/data";

import RestaurantCards from "../components/RestaurantCards";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center bg-[white]">
      <Navbar navbarItems={NavbarLinks} />
      <RestaurantCards restaurants={restaurants}/>
    </div>
  );
};

export default page;
