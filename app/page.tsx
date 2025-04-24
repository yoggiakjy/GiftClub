import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col bg-red-500">
      {/* Header */}
      <div className="relative flex justify-center items-center w-full">
        <Image
          src="/logo_transparent.png"
          alt="Logo"
          width={500}
          height={500}
          className="w-[8rem]"
        />

        <div className="absolute top-[3rem] right-[2rem] font-semibold space-x-4">
          <button className="w-[5rem] h-[2rem] bg-red-700 shadow-2xl rounded-lg text-white ">
            Sign in
          </button>
          <button className="w-[5rem] h-[2rem] bg-white shadow-2xl rounded-lg text-gray-700 ">
            Sign up
          </button>
        </div>
      </div>

      {/* Hero */}
      <p>Eat out without forking out</p>
      <p>Save up to 50% off the total bill at the best restaurants and bars in your city</p>
      <Link href={"/explore"} className="text-white">
        <p>click here for explor epage</p>
      </Link>
    </div>
  );
}
