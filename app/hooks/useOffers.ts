import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "@/src/firebase/firebase";

export interface Offer {
  id: string; // Add document ID
  restaurantId: string;
  availableSeats: number;
  createdAt: Date;
  day: string;
  discount: string;
  time: string;
}

export const useOffers = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const offersSnapshot = await getDocs(collection(firestore, "offers"));
        const offersList: Offer[] = [];

        offersSnapshot.forEach((doc) => {
          const data = doc.data();
          offersList.push({
            id: doc.id,
            restaurantId: data.restaurantId,
            availableSeats: data.availableSeats,
            createdAt: data.createdAt?.toDate() || new Date(),
            day: data.day,
            discount: data.discount,
            time: data.time,
          });
        });

        setOffers(offersList);
      } catch (error) {
        console.error("Error fetching offers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  return { offers, loading };
};