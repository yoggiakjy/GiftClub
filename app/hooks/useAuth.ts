// hooks/useAuth.ts
'use client';

import { useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, firestore } from '@/src/firebase/firebase';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Register a new customer
  const registerCustomer = async (email: string, password: string, displayName: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Create user document
      await setDoc(doc(firestore, 'users', userCredential.user.uid), {
        email,
        displayName,
        createdAt: serverTimestamp(),
        usedDiscounts: [],
        favoriteRestaurants: [],
        userType: 'customer'
      });
      return userCredential.user;
    } catch (error) {
      console.error("Error registering customer:", error);
      throw error;
    }
  };

  // Register a new restaurant
  const registerRestaurant = async (email: string, password: string, restaurantName: string, location: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Create restaurant document
      await setDoc(doc(firestore, 'restaurants', userCredential.user.uid), {
        email,
        name: restaurantName,
        location,
        description: '',
        images: [],
        createdAt: serverTimestamp(),
        userType: 'restaurant'
      });
      return userCredential.user;
    } catch (error) {
      console.error("Error registering restaurant:", error);
      throw error;
    }
  };

  // Sign in
  const signIn = async (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign out
  const signOut = async () => {
    return firebaseSignOut(auth);
  };

  // Get user type (customer or restaurant)
  const getUserType = async (uid: string) => {
    try {
      // Check if user exists in customers collection
      const userDoc = await getDoc(doc(firestore, 'users', uid));
      if (userDoc.exists()) return 'customer';
      
      // Check if user exists in restaurants collection
      const restaurantDoc = await getDoc(doc(firestore, 'restaurants', uid));
      if (restaurantDoc.exists()) return 'restaurant';
      
      return null;
    } catch (error) {
      console.error("Error getting user type:", error);
      return null;
    }
    
  };

  return {
    user,
    loading,
    registerCustomer,
    registerRestaurant,
    signIn,
    signOut,
    getUserType
  };
}