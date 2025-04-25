import React from "react";
import RestaurantCard from "./RestaurantCard";
import Link from "next/link";
import { Restaurant } from "../lib/types";

const RestaurantCards = ({ restaurants }: { restaurants: Restaurant[] }) => {
  return (
    <div className="max-w-7xl lg:max-w-none mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant) => (
          <Link key={restaurant.slug} href={`/restaurants/${restaurant.slug}`}>
            <RestaurantCard restaurant={restaurant} key={restaurant.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCards;
