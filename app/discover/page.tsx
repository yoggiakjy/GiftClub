"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { NavbarLinks, videos } from "../lib/data";
import { Orientation } from "../lib/types";
import VideoScroller from "../components/VideoScroller";

const page = () => {
  return (
    <div className="relative flex justify-center items-start w-full">
      <Navbar navbarItems={NavbarLinks} orientation={Orientation.Vertical} />
      <VideoScroller videos={videos} />
    </div>
  );
};

export default page;
