import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/navigation";

const logOutButton = () => {
  const { signOut, user } = useAuth();
  const router = useRouter();
  if (!user) {
    return null;
  }

  const handleLogout = async () => {
    try {
      await signOut();
      router.push("/signin"); // Redirect to sign-in page after logout
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <button onClick={handleLogout} className="text-red-500 hover:text-red-700">
      Logout
    </button>
  );
};

export default logOutButton;
