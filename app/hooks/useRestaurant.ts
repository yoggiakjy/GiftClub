import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "@/src/firebase/firebase";

export interface Restaurant {
  id: string;
  name: string;
  location: string;
  discount?: string;
  image?: string;
  slug: string;
}

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const restaurantsSnapshot = await getDocs(collection(firestore, "restaurants"));
        const restaurantsList: Restaurant[] = [];

        restaurantsSnapshot.forEach((doc) => {
          const data = doc.data();
          // Create a slug from the restaurant name if it doesn't exist
          const slug = data.slug || data.name?.toLowerCase().replace(/\s+/g, '-') || doc.id;
          
          restaurantsList.push({
            id: doc.id,
            name: data.name || 'Unnamed Restaurant',
            location: data.location || 'Unknown Location',
            discount: data.discount || '',
            image: data.image || "/default-restaurant.jpg",
            slug: slug
          });
        });

        setRestaurants(restaurantsList);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return { restaurants, loading };
};