"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { NavbarLinks, restaurants } from "../lib/data";

import RestaurantCards from "../components/RestaurantCards";
import { Orientation } from "../lib/types";
import CreateOfferButton from "../components/CreateOfferButton";
import { useAuth } from "../hooks/useAuth";
import { firestore } from "@/src/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

const page = () => {
  const { user } = useAuth();
  const [isRestaurant, setIsRestaurant] = useState(false);

  // Check if the user is a restaurant whenever the user changes
  useEffect(() => {
    const checkIfRestaurant = async () => {
      if (!user) {
        setIsRestaurant(false);
        return;
      }

      try {
        // Get user data directly from the restaurants collection
        const restaurantRef = doc(firestore, "restaurants", user.uid);
        const restaurantSnap = await getDoc(restaurantRef);

        if (restaurantSnap.exists() && restaurantSnap.data().userType === "restaurant") {
          setIsRestaurant(true);
        } else {
          setIsRestaurant(false);
        }
      } catch (error) {
        console.error("Error checking if user is restaurant:", error);
        setIsRestaurant(false);
      }
    };

    checkIfRestaurant();
  }, [user]);
  return (
    <>
      <div className="w-full h-full flex flex-col justify-start items-center ">
      <Navbar navbarItems={NavbarLinks} orientation={Orientation.Horizontal} />
      <PageHeader
        headline="Australia's Best Restaurants"
        subline="Discover the best restaurant deals near you. Save up to 50% off the total bill, including drinks."
      />
      <RestaurantCards restaurants={restaurants} />
      <Footer className="mt-[5rem]"/>
    </div>

      <div className="fixed bottom-6 right-6 z-50">
        {/* Only show CreateOfferButton to logged-in restaurant users */}
        {user && isRestaurant && <CreateOfferButton />}
      </div>
    </>
  );
};

export default page;
