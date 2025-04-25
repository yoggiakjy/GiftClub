import React from "react";
import Register from "./register";
import Navbar from "../components/Navbar";
import { NavbarLinks } from "../lib/data";
import { Orientation } from "../lib/types";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Navbar navbarItems={NavbarLinks} orientation={Orientation.Horizontal} />
      <div className="h-full w-full mt-[5rem]">
        <Register />
      </div>
    </div>
  );
};
export default page;
