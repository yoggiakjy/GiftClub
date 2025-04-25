import Navbar from "./components/Navbar";
import { cuisines, NavbarLinks } from "./lib/data";
import Hero from "./components/Hero";
import ExploreSection from "./components/ExploreSection";
import Footer from "./components/Footer";
import { Orientation } from "./lib/types";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-start items-center space-y-[4rem] bg-[#EDE8D0]">
      <div className="w-full flex flex-col justify-start items-center">
        <Navbar navbarItems={NavbarLinks} orientation={Orientation.Horizontal} />
        <Hero />
      </div>
      <ExploreSection cuisines={cuisines} />
      <Footer/>
    </div>
  );
}
