import React from "react";
import { FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";

const houses = [
  {
    id: 1,
    title: "Modern Apartment",
    location: "Dar es Salaam",
    price: "TZS 450,000 / month",
    image: '/images/modern.jpg',
  },
  {
    id: 2,
    title: "Cozy House",
    location: "Arusha",
    price: "TZS 300,000 / month",
    image: "https://source.unsplash.com/featured/?house",
  },
  {
    id: 3,
    title: "Beachside Villa",
    location: "Zanzibar",
    price: "TZS 1,200,000 / month",
    image: "https://source.unsplash.com/featured/?villa",
  },
];

export default function HouseRentingPage() {
  return (
    <div className="p-8 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-orange-600 mb-6">House Renting</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by location or title..."
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-orange-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {houses.map((house) => (
          <div
            key={house.id}
            className="bg-white border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={house.image}
              alt={house.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-black">{house.title}</h2>
              <div className="text-gray-600 flex items-center gap-2 my-2">
                <FaMapMarkerAlt className="text-orange-500" />
                <span>{house.location}</span>
              </div>
              <div className="text-gray-600 flex items-center gap-2 mb-4">
                <FaMoneyBillWave className="text-green-500" />
                <span>{house.price}</span>
              </div>
              <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
