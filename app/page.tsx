import Link from "next/link";
import Navbar from "./components/Navbar";
import { NavbarLinks } from "./lib/data";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center bg-[#EDE8D0] pt-[2rem]">
      <Navbar navbarItems={NavbarLinks} />

      {/* Hero */}
      <p className="text-6xl w-[35rem]">Eat out without forking out!</p>
      <p className="text-4xl font-light w-[50rem]">
        Save up to 50% off the total bill at the best restaurants and bars in
        your city
      </p>
      <Link href={"/explore"} className="text-white">
        <p>click here for explor epage</p>
      </Link>
    </div>
  );
}
