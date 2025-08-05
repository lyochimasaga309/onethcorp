// hotelcard.tsx

import React from "react";
import { FaRegBookmark } from "react-icons/fa";

interface HotelCardProps {
  id: number;
  name: string;
  image: string;
  location: string;
  price: number;
  rating: number;
  action?: React.ReactNode; // ✅ JSX now, not a function
}

const HotelCard: React.FC<HotelCardProps> = ({
  id,
  name,
  image,
  location,
  price,
  rating,
  action,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-xs transition-transform hover:scale-105 hover:shadow-xl duration-300">
      <div className="relative h-40 w-full overflow-hidden rounded-xl">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="mt-2">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{location}</p>
        <div className="flex justify-between items-center mt-1 text-sm">
          <span className="text-yellow-600 font-bold">
            {price.toLocaleString()} TZS
          </span>
          <span className="text-gray-400">{rating}★</span>
        </div>

        {/* ✅ Render JSX action directly */}
        {action && <div className="mt-3">{action}</div>}
      </div>
    </div>
  );
};

export default HotelCard;
