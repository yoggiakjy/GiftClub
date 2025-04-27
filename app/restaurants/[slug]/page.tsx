// /app/restaurant_pages/[slug]/page.tsx
import Navbar from "@/app/components/Navbar";
import { NavbarLinks } from "@/app/lib/data";
import { DynamicRestaurant, Orientation } from "@/app/lib/types";
import { getPageBySlug } from "../data/pages";
import { notFound } from "next/navigation";
import Footer from "@/app/components/Footer";
import RestaurantVouchers from "../RestaurantVouchers";
import RestaurantPageHero from "../RestaurantPageHero";
import RestaurantOverview from "../RestaurantOverview";

type Props = {
  params: { slug: string };
};

export default async function DynamicPage({ params }: Props) {
  const page = await getPageBySlug(params.slug);

  if (!page) {
    const newPage = () => ({
      slug: "page5",
      title: "Restaurant",
      image: "/images/image5.jpg",
      description:
        "Write an awesome description for your restaurant, get those foodies coming!",
      location: "Your Restaurant's Location",
      openingHours: "Your Restaurant's Opening Hours",
      vouchers: [
        { voucherTime: "Arrive between 12:00pm-12:00am", discount: "Dicount% off" },
        { voucherTime: "Arrive between 12:00pm-12:00am", discount: "Dicount% off" },
        { voucherTime: "Arrive between 12:00pm-12:00am", discount: "Dicount% off" },
        { voucherTime: "Arrive between 12:00pm-12:00am", discount: "Dicount% off" },
      ],
    });

    return (
      <div className="w-full flex-col">
        <Navbar
          navbarItems={NavbarLinks}
          orientation={Orientation.Horizontal}
        />
        <RestaurantPageHero page={newPage()} />
        <RestaurantOverview page={newPage()} />
        <RestaurantVouchers page={newPage()} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full flex-col">
      <Navbar navbarItems={NavbarLinks} orientation={Orientation.Horizontal} />
      <RestaurantPageHero page={page} />
      <RestaurantOverview page={page} />
      <RestaurantVouchers page={page} />
      <Footer />
    </div>
  );
}
