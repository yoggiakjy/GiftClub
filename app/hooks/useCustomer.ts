// hooks/useCustomer.ts
import { useState } from 'react';
import { collection, getDocs, query, where, limit, startAfter, orderBy, doc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';
import { firestore } from '@/src/firebase/firebase';

export function useCustomer(userId: string) {
  const [loading, setLoading] = useState(false);
  const [lastVisible, setLastVisible] = useState<any>(null);

  // Get all restaurants with discounts
  const getRestaurants = async (pageSize = 10) => {
    setLoading(true);
    try {
      // Query restaurants that have active discounts
      const discountQuery = query(
        collection(firestore, 'discounts'),
        where('isActive', '==', true),
        orderBy('createdAt', 'desc')
      );
      
      const discountSnapshot = await getDocs(discountQuery);
      const restaurantIds = [...new Set(discountSnapshot.docs.map(doc => doc.data().restaurantId))];
      
      // Get restaurant details
      const restaurants = await Promise.all(
        restaurantIds.map(async (id) => {
          const restaurantDoc = await getDoc(doc(firestore, 'restaurants', id));
          if (restaurantDoc.exists()) {
            return {
              id: restaurantDoc.id,
              ...restaurantDoc.data()
            };
          }
          return null;
        })
      );
      
      setLoading(false);
      return restaurants.filter(Boolean);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
      setLoading(false);
      return [];
    }
  };

  // Get restaurant discounts
  const getRestaurantDiscounts = async (restaurantId: string) => {
    try {
      const q = query(
        collection(firestore, 'discounts'),
        where('restaurantId', '==', restaurantId),
        where('isActive', '==', true)
      );
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error("Error fetching discounts:", error);
      return [];
    }
  };

  // Use a discount
  const useDiscount = async (discountId: string) => {
    if (!userId) return false;
    
    setLoading(true);
    try {
      // Add discount to user's used discounts
      const userRef = doc(firestore, 'users', userId);
      await updateDoc(userRef, {
        usedDiscounts: arrayUnion(discountId)
      });
      
      // Increment usage count on discount
      const discountRef = doc(firestore, 'discounts', discountId);
      const discountDoc = await getDoc(discountRef);
      
      if (discountDoc.exists()) {
        await updateDoc(discountRef, {
          usageCount: (discountDoc.data().usageCount || 0) + 1
        });
      }
      
      setLoading(false);
      return true;
    } catch (error) {
      console.error("Error using discount:", error);
      setLoading(false);
      return false;
    }
  };

  return {
    loading,
    getRestaurants,
    getRestaurantDiscounts,
    useDiscount
  };
}