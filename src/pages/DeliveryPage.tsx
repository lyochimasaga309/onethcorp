import React from "react";
import { FaTruck,FaPlus,FaHotel } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface DeliveryItem {
  id: number;
  image: string;
  name: string;
  description: string;
}

const dummyDeliveryItems: DeliveryItem[] = [
  {
    id: 1,
    image: "/images/parcel.JPG",
    name: "Express Parcel Delivery",
    description: "Fast and secure delivery for your urgent parcels.",
  },
  {
    id: 2,
    image: "/images/food.JPG",
    name: "Food & Grocery Delivery",
    description: "Instant delivery of your favorite meals and groceries.",
  },
  {
    id: 3,
    image: "/images/furniture.JPG",
    name: "Furniture Transport",
    description: "Safe transport of your home and office furniture.",
  },
];

export default function DeliveryPage() {
  const navigate = useNavigate();

  return (
     <div className="min-h-screen flex flex-col bg-gray-100">
          {/* Navbar */}
          <header className="flex justify-between items-center px-6 py-4 bg-black text-white shadow-lg">
            <div className="flex items-center space-x-3">
              <FaTruck size="text-blue-400 text-2xl" />
              <h1 className="text-xl font-extrabold tracking-wide">
                DELIVERY <span className="text-blue-400">SERVICES</span>
              </h1>
            </div>
            <button
              className="bg-blue-500 px-4 py-2 rounded text-sm hover:bg-yellow-600 flex items-center gap-2"
              onClick={() => navigate(`/delivery/request`)}
            >
              <FaPlus /> Delivery
            </button>
          </header>
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6 flex items-center gap-3">
        <FaTruck size="text-blue-600" /> Delivery list
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyDeliveryItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              <button
                onClick={() => navigate(`/delivery/${item.id}/request`)}
                className="mt-4 bg-blue-500 hover:bg-yellow-600 text-white py-2 px-4 rounded"
              >
                Request Delivery
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

   {/* Footer */}
      <footer className="bg-gray-900 text-center text-white/60 text-xs py-4 mt-8">
        &copy; {new Date().getFullYear()} ONETH CORPORATION. All rights reserved.
      </footer>
    </div>
  );
}

