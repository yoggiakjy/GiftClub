import React from "react";
import { Cuisine } from "../lib/types";
import Image from "next/image";

const CuisineCard = ({ cuisine }: { cuisine: Cuisine }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md">
      {/* Name */}
      <div className="absolute z-20 top-0 left-0 right-0 p-4">
        <h3 className="font-semibold text-3xl text-neutral-100 drop-shadow-lg">
          {cuisine.name}
        </h3>
      </div>

      {/* Image */}
      <div className="relative h-90 w-full">
        <Image
          src={cuisine.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute z-10 w-full h-full bg-zinc-800 opacity-25" />
      </div>

      {/* Discount */}
      <div className="absolute z-20 bottom-0 w-[10rem] mx-4 my-4 ">
        <div
          className={`rounded-full flex justify-center items-center px-1 py-2 ${cuisine.colour}`}
        >
          <p className="text-zinc-800 text-lg font-semibold">
            {cuisine.discount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CuisineCard;
