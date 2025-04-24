import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="w-full h-[70vh] px-[1rem]">
      <div className="w-full h-full flex justify-center items-center rounded-4xl bg-[url('/broken-noise.png')] bg-zinc-800 px-[2rem]">
        <div className="w-[30rem] text-neutral-200 space-y-[2.5rem]">
          <p className="text-6xl ">
            Eat out without <span className="text-[#E2725B]">forking out!</span>
          </p>
          <p className="text-2xl font-light">
            Save up to 50% off the total bill at the best restaurants and bars
            in your city.
          </p>
          <button className="flex justify-center items-center space-x-6 bg-neutral-200 rounded-full py-3 px-6 mt-[4rem]">
            <p className="text-zinc-800 text-lg font-semibold">
              Get Started Now
            </p>
            <FaArrowRightLong className="rounded-full bg-zinc-800 w-[2.3rem] h-[2.3rem] p-2" />
          </button>
        </div>

        <Image
          src="/hero_3d.png"
          alt="3D Building Image"
          width={600}
          height={600}
          className="w-[35rem]"
        />

        <div className="flex justify-center items-center w-[30rem] text-neutral-200 ">
          <div className="flex flex-col w-[60%] gap-3">
            <p className="text-2xl font-semibold">Top Venues</p>
            <p className="text-lg font-extralight">
              Whether you&apos;re planning a night out or a special event,
              we&apos;ve got the perfect spot waiting.
            </p>
            <button className="flex justify-center items-center space-x-6 bg-neutral-200 rounded-full py-3 px-6 mt-6">
              <Link href={"/explore"}>
                <p className="text-zinc-800 text-lg font-semibold">
                  Check Our Venues
                </p>
                <FaArrowRightLong className="rounded-full bg-zinc-800 w-[2.3rem] h-[2rem] p-2" />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
