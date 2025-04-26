import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { Restaurant } from '../lib/types';

const RestaurantCard: React.FC<Restaurant> = ({ restaurant }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full md:w-80"> 
      <div className="relative h-50">
        {restaurant.image ? (
          <Image
            src={restaurant.image}
            alt={restaurant.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">No image available</p>
          </div>
        )}
        {restaurant.discount && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full font-bold">
            {restaurant.discount}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{restaurant.name}</h3>
        <p className="text-gray-600">{restaurant.location}</p>
        
        {restaurant.hasOffers && !restaurant.discount && (
          <p className="text-green-600 mt-2 font-medium">Special offers available</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;
