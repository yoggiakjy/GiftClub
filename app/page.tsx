import Navbar from "./components/Navbar";
import { NavbarLinks } from "./lib/data";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center bg-[#EDE8D0]">
      <Navbar navbarItems={NavbarLinks} />

      {/* Hero */}
      <Hero />
    </div>
  );
}
