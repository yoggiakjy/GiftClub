// /app/restaurant_pages/[slug]/page.tsx
import Navbar from "@/app/components/Navbar";
import { NavbarLinks } from "@/app/lib/data";
import { DynamicRestaurant, Orientation } from "@/app/lib/types";
import { getPageBySlug } from "../data/pages";
import { notFound } from "next/navigation";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/Footer";

type Props = {
  params: { slug: string };
};

export default async function DynamicPage({ params }: Props) {
  const page = await getPageBySlug(params.slug);

  if (!page) return notFound();

  return (
    <div className="w-full flex-col">
      <Navbar navbarItems={NavbarLinks} orientation={Orientation.Horizontal} />
      <RestaurantPageHero page={page} />
      <RestaurantOverview page={page} />
      <RestaurantVouchers page={page} />
      <Footer/>
    </div>
  );
}

const RestaurantVouchers = ({ page }: { page: DynamicRestaurant }) => {
  return (
    <div className="flex flex-col justify-center items-center border-b mx-[3rem] py-[2rem]">
      <div className="w-full flex justify-between items-start text-zinc-800">
        <p className="text-4xl">Vouchers</p>
        <div className="flex flex-col justify-center items-center gap-4">
          {page.vouchers.map((voucher, index) => (
            <div key={index} className="text-xl flex justify-center items-center w-[45rem] rounded-md bg-[#FDF4E3] border gap-6 p-8">
              <p className="text-center w-[8rem] py-3 border border-zinc-800 rounded-xl">{voucher.discount}</p>
              <p className="font-semibold">Dine in</p>
              <div className="border-dotted border-l-3 border-zinc-800 h-[3rem]"/>
              <p>{voucher.voucherTime}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const RestaurantOverview = ({ page }: { page: DynamicRestaurant }) => {
  return (
    <div className="flex flex-col justify-center items-center border-y mx-[3rem] mt-[3rem] py-[2rem]">
      <div className="w-full flex justify-between items-start text-zinc-800">
        <p className="text-4xl  ">Overview</p>
        <p className="text-2xl">{page.description}</p>
      </div>
    </div>
  );
};
const RestaurantPageHero = ({ page }: { page: DynamicRestaurant }) => {
  return (
    <div>
      <div className="relative w-full h-[2rem] mt-[4rem]">
        <Link
          href={"/explore"}
          className="absolute top-0 left-[3rem] flex justify-center items-center gap-2 text-xl text-zinc-800 font-light"
        >
          <IoArrowBack />
          Back
        </Link>
      </div>

      <div className="flex w-full px-[3rem] mt-[1rem]">
        <div className="w-full flex flex-col">
          <div className="flex flex-col justify-start items-between w-full h-full text-zinc-800 space-y-8 ">
            <div className="flex flex-col justify-start items-start h-full gap-4">
              <p className="text-7xl ">{page.title}</p>
              <div className="flex justify-start items-center gap-3">
                <FaMapLocationDot className="text-zinc-700 text-3xl" />
                <p className="text-lg font-medium">{page.location}</p>
              </div>

              <div className="flex justify-start items-center gap-3">
                <FaClock className="text-zinc-700 text-[27px]" />
                <p className="text-lg font-medium">{page.openingHours}</p>
              </div>
            </div>

            <div className="flex justify-start items-end gap-8">
              <div className="flex justify-center items-center w-[8rem] h-[4rem] rounded-lg bg-sky-200">
                <p className="text-xl font-semibold">
                  {page.vouchers[0].discount}
                </p>
              </div>
              <button className="w-[15rem] h-[4rem] border rounded-lg">
                <p className="text-xl font-light">Redeem Now</p>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end items-end">
          <div className="w-[55rem] h-[30rem] overflow-hidden rounded-3xl">
            <Image
              src={page.image}
              alt={page.title}
              width={1000}
              height={1000}
              className="object-cover"
            />
          </div>

          <div className="w-full"></div>
        </div>
      </div>
    </div>
  );
};
