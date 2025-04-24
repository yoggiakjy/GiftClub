import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Restaurant } from '../lib/types';

interface Props {
  restaurant: Restaurant;
}

const RestaurantCard: React.FC<Props> = ({ restaurant }) => {
  const { name, location, discount, image, slug } = restaurant;
  
  return (
    <div className="relative rounded-lg overflow-hidden shadow-md">
      {/* Top location and navigation */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 z-10">
        <h3 className="font-semibold text-white drop-shadow-lg">{location}</h3>
        <button className="bg-white bg-opacity-70 rounded-full p-1">
          {/* <ChevronRight className="w-5 h-5" /> */}
        </button>
      </div>
      
      {/* Restaurant image */}
      <div className="relative h-80 w-full">
        <Image
          src={restaurant.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        
        {/* Pagination dots
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className={`h-2 w-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-white bg-opacity-60'}`}
            />
          ))}
        </div> */}
      </div>
      
      {/* Restaurant info */}
      <div className="p-4 bg-white flex justify-between items-center">
        <div>
          <h2 className="font-bold text-lg">{name}</h2>
          <p className="text-gray-600">{location}</p>
        </div>
        
        {/* Discount tag */}
        <div className="flex items-center">
          <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-md flex items-center">
            <span className="mr-1">↑</span> {discount}
          </div>
          <Link href={`/restaurant/${slug}`}>
            <div className="ml-3 bg-gray-100 rounded-full p-1">
              <ChevronRight className="w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;