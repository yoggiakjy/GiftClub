// /app/restaurant_pages/[slug]/page.tsx
import Navbar from "@/app/components/Navbar";
import { NavbarLinks } from "@/app/lib/data";
import { Orientation } from "@/app/lib/types";
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

  if (!page) return notFound();

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
