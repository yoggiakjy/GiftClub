// pages/register.tsx
"use client";

import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/src/firebase/firebase";
import Link from "next/link";

export default function Register() {
  const [accountType, setAccountType] = useState("customer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  // const [error, setError] = useState('');

  const { registerCustomer, registerRestaurant } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      if (accountType === "customer") {
        await registerCustomer(email, password, name);
        router.push("/explore");
      } else {
        await registerRestaurant(email, password, name, location);
        router.push("/restaurant/dashboard");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/explore");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Create an Account</h1>

      <div className="flex mb-4">
        <button
          className={`flex-1 py-2 ${
            accountType === "customer"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setAccountType("customer")}
        >
          Customer
        </button>
        <button
          className={`flex-1 py-2 ${
            accountType === "restaurant"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setAccountType("restaurant")}
        >
          Restaurant
        </button>
      </div>

      {/* {error && <p className="text-red-500 mb-4">{error}</p>} */}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">
            {accountType === "customer" ? "Your Name" : "Restaurant Name"}
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {accountType === "restaurant" && (
          <div className="mb-4">
            <label className="block mb-2">Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
      {accountType === "customer" && (
        <button
          onClick={signInWithGoogle}
          type="submit"
          className="w-full mt-3 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Sign in with google
        </button>
      )}

      <div className="text-center mt-4">
        Already have an account?{" "}
        <Link href="/signin" className="text-blue-500 hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
}
