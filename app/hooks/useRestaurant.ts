// hooks/useRestaurant.ts
import { useState } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
  query,
  where,
  getDocs,
  arrayUnion,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firestore, storage } from "@/src/firebase/firebase";

export function useRestaurant(restaurantId: string) {
  const [loading, setLoading] = useState(false);

  // Upload restaurant image
  const uploadImage = async (file: File) => {
    if (!restaurantId) return null;

    setLoading(true);
    try {
      const storageRef = ref(
        storage,
        `restaurants/${restaurantId}/${Date.now()}-${file.name}`
      );
      await uploadBytes(storageRef, file);
      const downloadUrl = await getDownloadURL(storageRef);

      // Update restaurant document with new image
      const restaurantRef = doc(firestore, "restaurants", restaurantId);
      await updateDoc(restaurantRef, {
        images: arrayUnion(downloadUrl),
      });

      setLoading(false);
      return downloadUrl;
    } catch (error) {
      console.error("Error uploading image:", error);
      setLoading(false);
      return null;
    }
  };

  // Create a new discount
  const createDiscount = async (discountData: {
    title: string;
    description: string;
    percentage: number;
    validFrom: Date;
    validUntil: Date;
  }) => {
    if (!restaurantId) return null;

    setLoading(true);
    try {
      const discountRef = await addDoc(collection(firestore, "discounts"), {
        restaurantId,
        ...discountData,
        isActive: true,
        createdAt: serverTimestamp(),
        usageCount: 0,
      });

      setLoading(false);
      return discountRef.id;
    } catch (error) {
      console.error("Error creating discount:", error);
      setLoading(false);
      return null;
    }
  };

  // Get restaurant's discounts
  const getDiscounts = async () => {
    if (!restaurantId) return [];

    try {
      const q = query(
        collection(firestore, "discounts"),
        where("restaurantId", "==", restaurantId)
      );

      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error("Error fetching discounts:", error);
      return [];
    }
  };

  return {
    loading,
    uploadImage,
    createDiscount,
    getDiscounts,
  };
}
