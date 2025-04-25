"use client";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/navigation";
import { Orientation } from "../lib/types";

const AuthButton = ({ orientation }: { orientation: Orientation }) => {
  const { user, signOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    if (user) {
      try {
        await signOut();
        router.push("/signin"); // Redirect to sign-in page after logout
      } catch (error) {
        console.error("Logout error:", error);
      }
    } else {
      router.push("/register"); // Redirect to register page if no user
    }
  };

  return (
    <div className="flex justify-center items-center">
      <p className={`${user ? "block mr-[1rem]" : "hidden"}`}>
        Hey {user?.displayName ? user?.displayName : "Mate"} 👋
      </p>
      <button
        onClick={handleLogout}
        className={`${
          orientation === Orientation.Vertical ? "mt-[2rem]" : ""
        } flex justify-center items-center relative z-20 w-[10rem] h-[3rem] rounded-full border font-medium hover:bg-neutral-100 transition duration-300 ease-in-out`}
      >
        {user ? "Logout" : "Sign Up"}
      </button>
    </div>
  );
};

export default AuthButton;
