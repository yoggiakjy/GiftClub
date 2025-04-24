import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Restaurant } from "../lib/types";

const RestaurantCards = ({ restaurants }: { restaurants: Restaurant[] }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantCards;
