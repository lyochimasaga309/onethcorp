import React from "react";
import {
  FaMapMarkedAlt,
  FaSearch,
  FaTree,
  FaDollarSign,
  FaLandmark,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function LandAcquisitionPage() {
  const lands = [
    {
      id: 1,
      title: "20 Acres in Morogoro",
      location: "Kibaha",
      size: "20 Acres",
      price: "TZS 50M",
      status: "Available",
      image: "/images/land1.jpg",
    },
    {
      id: 2,
      title: "5 Acres Near Arusha Airport",
      location: "Arusha",
      size: "5 Acres",
      price: "TZS 18M",
      status: "Negotiating",
      image: "/images/land2.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-black flex flex-col">
      {/* Header */}
      <header className="bg-black text-white py-4 px-6 shadow-md flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <FaLandmark className="text-yellow-400 text-2xl" />
          <h1 className="text-xl font-bold text-yellow-500">
            ONETH | Land Acquisition
          </h1>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white">
          Request Land
        </Button>
      </header>

      {/* Intro */}
      <main className="flex-grow px-6 py-10 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-yellow-600 mb-2">
            Secure Your Future with ONETH Land Services
          </h2>
          <p className="text-gray-700 max-w-3xl">
            We assist clients in acquiring legal, titled lands for farming,
            development, or investment across Tanzania. Discover listed lands or
            send us your custom land request today.
          </p>
        </section>

        {/* Search / Filter */}
        <section className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4 max-w-2xl">
          <FaSearch className="text-blue-500" />
          <input
            type="text"
            placeholder="Search by location, size, or region..."
            className="flex-grow outline-none text-sm"
          />
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
            Search
          </Button>
        </section>

        {/* Listings + Request Form Layout */}
<section className="flex flex-col lg:flex-row gap-6">
  {/* Land Listings (Left side) */}
  <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
    {lands.map((land) => (
      <div
        key={land.id}
        className="bg-white rounded-xl shadow-md overflow-hidden"
      >
        <img
          src={land.image}
          alt={land.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg">{land.title}</h3>
          <p className="text-sm text-gray-600 flex items-center">
            <FaMapMarkedAlt className="mr-2 text-blue-500" />
            {land.location}
          </p>
          <p className="text-sm mt-1">
            <FaTree className="inline mr-2 text-green-600" />
            {land.size}
          </p>
          <p className="text-sm mt-1">
            <FaDollarSign className="inline mr-2 text-yellow-500" />
            {land.price}
          </p>
          <p
            className={`mt-2 text-sm font-semibold ${
              land.status === "Available"
                ? "text-green-600"
                : "text-orange-500"
            }`}
          >
            {land.status}
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* Request Form (Right side) */}
  <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-md p-6">
    <h3 className="text-xl font-bold text-yellow-600 mb-4">
      Land Request Form
    </h3>
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-semibold mb-1">Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full border rounded px-3 py-2 text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1">Phone Number</label>
        <input
          type="tel"
          placeholder="+255..."
          className="w-full border rounded px-3 py-2 text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1">Preferred Location</label>
        <input
          type="text"
          placeholder="Region, District, etc."
          className="w-full border rounded px-3 py-2 text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1">Land Size</label>
        <input
          type="text"
          placeholder="e.g. 10 Acres"
          className="w-full border rounded px-3 py-2 text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1">Budget</label>
        <input
          type="text"
          placeholder="e.g. TZS 30M"
          className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full mt-2">
            Submit Request
          </Button>
         </form>
       </div>
     </section>


        {/* CTA Section */}
        <section className="text-center mt-10">
          <h3 className="text-xl font-bold mb-2 text-black">
            Can't find the land you’re looking for?
          </h3>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3">
            Send Land Request
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-yellow-400 text-black text-center py-4 shadow-inner">
        <p className="text-sm font-semibold">
          &copy; {new Date().getFullYear()} ONETH CORPORATION — Land Services
        </p>
      </footer>
    </div>
  );
}
