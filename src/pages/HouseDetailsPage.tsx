import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaMapMarkerAlt, FaMoneyBillWave } from "react-icons/fa";

const houses = [
  {
    id: 1,
    title: "Modern Apartment",
    location: "Dar es Salaam",
    price: "TZS 450,000 / month",
    image: '/images/modern.jpg',
    description: "A modern, fully-furnished apartment with AC, Wi-Fi, and parking."
  },
  {
    id: 2,
    title: "Cozy House",
    location: "Arusha",
    price: "TZS 300,000 / month",
    image: "https://source.unsplash.com/featured/?house",
    description: "A small but comfy home perfect for a couple or single tenant."
  },
  {
    id: 3,
    title: "Beachside Villa",
    location: "Zanzibar",
    price: "TZS 1,200,000 / month",
    image: "https://source.unsplash.com/featured/?villa",
    description: "Luxury villa with ocean view, private pool, and chef services."
  },
];

export default function HouseDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const house = houses.find(h => h.id === Number(id));

  if (!house) return <p className="p-8">House not found</p>;

  return (
    <div className="p-8 min-h-screen bg-white">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-orange-500 underline"
      >
        ← Back to list
      </button>
      <img src={house.image} alt={house.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h1 className="text-3xl font-bold mb-2">{house.title}</h1>
      <div className="text-gray-600 flex items-center gap-2 mb-2">
        <FaMapMarkerAlt size="text-orange-500" />
        {house.location}
      </div>
      <div className="text-gray-600 flex items-center gap-2 mb-4">
        <FaMoneyBillWave size="text-green-500" />
        {house.price}
      </div>
      <p className="mb-6 text-gray-700">{house.description}</p>

      <button className="bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700">
        Book Now
      </button>
    </div>
  );
}
