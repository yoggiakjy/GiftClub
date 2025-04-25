// Updated RestaurantCards component
import React from "react";
import RestaurantCard from "./RestaurantCard";
import Link from "next/link";
import { useRestaurants } from "../hooks/useRestaurant";
import { useOffers } from "../hooks/useOffers";

const RestaurantCards = () => {
  const { restaurants, loading: loadingRestaurants } = useRestaurants();
  const { offers, loading: loadingOffers } = useOffers();

  if (loadingRestaurants || loadingOffers) {
    return <p>Loading...</p>;
  }

  // First, enrich restaurants with offer data
  const enrichedRestaurants = restaurants.map((restaurant) => {
    // Find any offers for this restaurant
    const restaurantOffers = offers.filter(offer => 
      offer.restaurantId === restaurant.id
    );
    
    // Use the first offer's discount if available
    const activeOffer = restaurantOffers.length > 0 ? restaurantOffers[0] : null;
    
    return {
      ...restaurant,
      discount: activeOffer?.discount || restaurant.discount, 
      hasOffers: restaurantOffers.length > 0,
      offerData: activeOffer // Store the full offer data if needed
    };
  });

  // Then filter to only show restaurants with offers
  const restaurantsWithOffers = enrichedRestaurants.filter(restaurant => restaurant.hasOffers);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {restaurantsWithOffers.length === 0 ? (
        <div className="text-center py-10">
          <h3 className="text-xl font-medium">No restaurants with offers available right now</h3>
          <p className="text-gray-500 mt-2">Check back later for new offers!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {restaurantsWithOffers.map((restaurant) => (
            <Link
              key={restaurant.slug}
              href={`/restaurants/${restaurant.slug}`}
              className="block"
            >
              <RestaurantCard restaurant={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCards;