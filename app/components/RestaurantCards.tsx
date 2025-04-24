import React from "react";
import RestaurantCard from "./RestaurantCard";
import Link from "next/link";

const RestaurantCards = () => {
  const restaurants = [
    {
      id: 1,
      name: "Shoya Japanese Restaurant",
      location: "Melbourne",
      discount: "25% OFF",
      image: "/japanese-restaurant.jpg",
      slug: "shoya-japanese-restaurant",
    },
    {
      id: 2,
      name: "Shanghai Village",
      location: "Melbourne",
      discount: "15% OFF",
      image: "/japanese-restaurant.jpg",
      slug: "shanghai-village",
    },
    {
      id: 3,
      name: "Shoya Japanese Restaurant",
      location: "Melbourne",
      discount: "25% OFF",
      image: "/japanese-restaurant.jpg",
      slug: "shoya-japanese-restaurant",
    },
    {
      id: 4,
      name: "Shanghai Village",
      location: "Melbourne",
      discount: "15% OFF",
      image: "/japanese-restaurant.jpg",
      slug: "shanghai-village",
    },
    {
      id: 5,
      name: "Shoya Japanese Restaurant",
      location: "Melbourne",
      discount: "25% OFF",
      image: "/japanese-restaurant.jpg",
      slug: "shoya-japanese-restaurant",
    },
    {
      id: 6,
      name: "Shanghai Village",
      location: "Melbourne",
      discount: "15% OFF",
      image: "/japanese-restaurant.jpg",
      slug: "shanghai-village",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {restaurants.map((restaurant) => (
          <Link
            key={restaurant.slug}
            href={`/restaurants/${restaurant.slug}`}
          >
            <RestaurantCard restaurant={restaurant} key={restaurant.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCards;
