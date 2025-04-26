// components/CreateOfferButton.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import {
  doc,
  addDoc,
  collection,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { firestore } from "@/src/firebase/firebase";
import { motion } from "framer-motion";
import { Orientation } from "../lib/types";

const CreateOfferButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setUserType] = useState<string | null>(null);
  const [offer, setOffer] = useState({
    day: "Monday",
    timeStart: "17:30",
    timeEnd: "19:30",
    discountPercentage: 30,
    availableSeats: 5,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { user, getUserType } = useAuth();

  useEffect(() => {
    const checkUserType = async () => {
      if (user) {
        const type = await getUserType(user.uid);
        setUserType(type);
      } else {
        setUserType(null);
      }
    };

    checkUserType();
  }, [user, getUserType]);

  const openModal = () => {
    setIsModalOpen(true);
    setSuccessMessage("");
    setErrorMessage("");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setOffer({
      ...offer,
      [name]:
        name === "discountPercentage" || name === "availableSeats"
          ? parseInt(value)
          : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      setErrorMessage("You must be logged in to create an offer");
      return;
    }

    setIsLoading(true);
    try {

      // Add offer to Firestore
      const offerData = {
        restaurantId: user.uid,
        day: offer.day,
        time: `${formatTime(offer.timeStart)} - ${formatTime(offer.timeEnd)}`,
        discount: `${offer.discountPercentage}% off`,
        availableSeats: offer.availableSeats,
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(firestore, "offers"), offerData);

      // Update restaurant document to indicate it has offers
      const restaurantRef = doc(firestore, "restaurants", user.uid);
      await updateDoc(restaurantRef, {
        hasOffers: true,
        updatedAt: serverTimestamp(),
      });

      setSuccessMessage("Offer created successfully!");
      setTimeout(() => {
        setSuccessMessage("");
        closeModal();
      }, 2000);
    } catch (error) {
      console.error("Error creating offer:", error);
      setErrorMessage("Failed to create offer. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "pm" : "am";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minutes}${ampm}`;
  };

  // Don't render anything if user is not a restaurant
  if (userType !== "restaurant") {
    return null;
  }

  return (
    <>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openModal}
          className="bg-amber-400 hover:bg-amber-500 text-black font-medium py-2 px-4 rounded-full flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Create Offer
        </motion.button>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl shadow-lg p-6 m-4 max-w-md w-full"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Create dine-in offer</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {errorMessage && (
              <div
                className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
                role="alert"
              >
                <p>{errorMessage}</p>
              </div>
            )}

            {successMessage && (
              <div
                className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4"
                role="alert"
              >
                <p>{successMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-[100px_1fr] gap-4 mb-4 items-center">
                <label className="text-gray-500">Day</label>
                <select
                  name="day"
                  value={offer.day}
                  onChange={handleInputChange}
                  className="p-2 border rounded"
                >
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>

                <label className="text-gray-500">Time</label>
                <div className="flex items-center">
                  <input
                    type="time"
                    name="timeStart"
                    value={offer.timeStart}
                    onChange={handleInputChange}
                    className="p-2 border rounded w-full"
                  />
                  <span className="mx-2">-</span>
                  <input
                    type="time"
                    name="timeEnd"
                    value={offer.timeEnd}
                    onChange={handleInputChange}
                    className="p-2 border rounded w-full"
                  />
                </div>

                <label className="text-gray-500">Offer</label>
                <div className="flex items-center">
                  <input
                    type="number"
                    name="discountPercentage"
                    value={offer.discountPercentage}
                    onChange={handleInputChange}
                    min="1"
                    max="100"
                    className="p-2 border rounded w-24"
                  />
                  <span className="ml-2">% off</span>
                </div>

                <label className="text-gray-500">Supply</label>
                <div className="flex items-center">
                  <input
                    type="number"
                    name="availableSeats"
                    value={offer.availableSeats}
                    onChange={handleInputChange}
                    min="1"
                    className="p-2 border rounded w-24"
                  />
                  <span className="ml-2">available</span>
                </div>
              </div>

              

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 px-4 rounded-md font-medium"
              >
                {isLoading ? "Creating..." : "Post to the Marketplace"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default CreateOfferButton;
