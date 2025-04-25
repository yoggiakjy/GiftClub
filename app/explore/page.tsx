"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { NavbarLinks, restaurants } from "../lib/data";

import RestaurantCards from "../components/RestaurantCards";
import { Orientation } from "../lib/types";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center ">
      <Navbar navbarItems={NavbarLinks} orientation={Orientation.Horizontal} />
      <PageHeader
        headline="Australia's Best Restaurants"
        subline="Discover the best restaurant deals near you. Save up to 50% off the total bill, including drinks."
      />
      <RestaurantCards restaurants={restaurants} />
      <Footer className="mt-[5rem]"/>
    </div>
  );
};

export default page;
