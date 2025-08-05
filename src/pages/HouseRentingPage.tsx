import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaHome,
  FaSearch,
  FaCamera,
  FaRegBookmark,
} from "react-icons/fa";

const houses = [
  {
    id: 1,
    title: "Modern Apartment",
    location: "Dar es Salaam",
    price: "TZS 25,000 / month",
    image: "/images/modern.jpg",
    date: "Jul 28th, 2025",
    photos: 7,
  },
  {
    id: 2,
    title: "Cozy House",
    location: "Arusha",
    price: "TZS 35,000 / month",
    image: "/images/house-hero.jpg",
    date: "Jul 28th, 2025",
    photos: 10,
  },
  {
    id: 3,
    title: "Beachside Villa",
    location: "Zanzibar",
    price: "TZS 40,000 / month",
    image: "https://source.unsplash.com/featured/?villa",
    date: "Jul 28th, 2025",
    photos: 8,
  },
   {
    id: 1,
    title: "Modern Apartment",
    location: "Dar es Salaam",
    price: "TZS 50,000 / month",
    image: "/images/modern.jpg",
    date: "Jul 28th, 2025",
    photos: 7,
  },
   {
    id: 1,
    title: "Modern Apartment",
    location: "Dar es Salaam",
    price: "TZS 80,000 / month",
    image: "/images/modern.jpg",
    date: "Jul 28th, 2025",
    photos: 7,
  },
   {
    id: 1,
    title: "Modern Apartment",
    location: "Dar es Salaam",
    price: "TZS 100,000 / month",
    image: "/images/modern.jpg",
    date: "Jul 28th, 2025",
    photos: 7,
  },
   {
    id: 1,
    title: "Modern Apartment",
    location: "Dar es Salaam",
    price: "TZS 150,000 / month",
    image: "/images/modern.jpg",
    date: "Jul 28th, 2025",
    photos: 7,
  },
   {
    id: 1,
    title: "Modern Apartment",
    location: "Dar es Salaam",
    price: "TZS 200,000 / month",
    image: "/images/modern.jpg",
    date: "Jul 28th, 2025",
    photos: 7,
  },
   {
    id: 1,
    title: "Modern Apartment",
    location: "Dar es Salaam",
    price: "TZS 300,000 / month",
    image: "/images/modern.jpg",
    date: "Jul 28th, 2025",
    photos: 7,
  },
];

export default function HouseRentingPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Add filtering logic here if needed
  };

  const filteredHouses = houses.filter((house) =>
    house.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    house.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-black text-white shadow-lg">
        <div className="flex items-center space-x-3">
          <FaHome className="text-orange-500 text-2xl" />
          <h1 className="text-xl font-extrabold tracking-wide">
            HOUSE <span className="text-yellow-400">RENTING</span>
          </h1>
        </div>
        <button className="bg-yellow-500 px-4 py-2 rounded text-sm hover:bg-yellow-600">
          Add Listing
        </button>
      </header>

      {/* Page Layout */}
      <div className="flex flex-col lg:flex-row gap-6 p-6">
        {/* Sidebar Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Form submitted");
          }}
          className="lg:w-1/3 bg-white p-6 rounded-lg shadow space-y-4"
        >
          <h3 className="font-bold">FULL NAME</h3>
          <input type="text" placeholder="Name" className="border p-2 w-full rounded" />

          <h3 className="font-bold">PRICE RANGE</h3>
          <div className="flex gap-2">
            <input type="number" placeholder="Min" className="border p-2 w-1/2 rounded" />
            <input type="number" placeholder="Max" className="border p-2 w-1/2 rounded" />
          </div>

          <h3 className="font-bold">SALE OR RENT</h3>
          <label className="block"><input type="radio" name="type" /> For Sale</label>
          <label className="block"><input type="radio" name="type" /> For Rent</label>

          <h3 className="font-bold">SIZE SQ.M.</h3>
          <div className="flex gap-2">
            <input type="number" placeholder="Min" className="border p-2 w-1/2 rounded" />
            <input type="number" placeholder="Max" className="border p-2 w-1/2 rounded" />
          </div>

          <h3 className="font-bold">PROPERTY CONDITION</h3>
          <select className="border p-2 w-full rounded">
            <option value="">Select</option>
            <option>Fairly Used</option>
            <option>Newly Built</option>
            <option>Off-plan</option>
            <option>Old</option>
            <option>Renovated</option>
            <option>Uncompleted</option>
            <option>Under Construction</option>
          </select>

          <h3 className="font-bold">BEDROOM & KITCHEN</h3>
          <div className="flex gap-2">
            <input type="number" placeholder="Number" className="border p-2 w-1/2 rounded" />
            <select className="border p-2 w-1/2 rounded">
              <option>Select</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <h3 className="font-bold">BATHROOM & TOILET</h3>
          <select className="border p-2 w-full rounded">
            <option>Select</option>
            <option>Single Self</option>
            <option>Each Self</option>
            <option>Public/Sharing</option>
          </select>

          <h3 className="font-bold">FURNISHED</h3>
          <select className="border p-2 w-full rounded">
            <option>Select</option>
            <option>Furnished</option>
            <option>Unfurnished</option>
          </select>

          <h3 className="font-bold">PARKING</h3>
          <select className="border p-2 w-full rounded">
            <option>Select</option>
            <option>Available</option>
            <option>Not Available</option>
          </select>

          <h3 className="font-bold">LOCATIONS</h3>
          <div className="flex gap-2">
            <select className="border p-2 w-1/2 rounded">
              <option>Country</option>
              <option>Tanzania</option>
              <option>Kenya</option>
              <option>Uganda</option>
              <option>Rwanda</option>
            </select>
            <select className="border p-2 w-1/2 rounded">
              <option>Region</option>
              <option>Geita</option>
              <option>Mwanza</option>
              <option>Dar es Salaam</option>
              <option>Mbeya</option>
            </select>
          </div><br></br>
           <select className="border p-2 w-1/2 rounded">
              <option>District</option>
              <option>Buhalahala</option>
              <option>Mabibo</option>
              <option>Temeke</option>
              <option>Kishiri</option>
            </select>
            <select className="border p-2 w-1/2 rounded">
              <option>Village/Street</option>
              <option>14 kambarage</option>
              <option>Mashapale</option>
              <option>Miti mirefu</option>
              <option>Shilabela</option>
            </select>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={() => navigate("/submit")}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded w-full"
          >
            Submit
          </button>
          <h4 className="font-bold">Please fill the inputs above</h4>
        </form>

        {/* Right Section: Listings */}
        <div className="flex-1">
          {/* Tags */}
          <div className="flex justify-between items-center mb-4 text-sm text-gray-700">
            <div className="flex gap-2 flex-wrap">
              <span className="bg-gray-200 px-2 py-1 rounded">All Listings</span>
              <span>in</span>
              <span className="bg-gray-200 px-2 py-1 rounded">Real Estate</span>
              <span>in</span>
              <span className="bg-gray-200 px-2 py-1 rounded">Houses</span>
            </div>
            <select className="border rounded-lg p-2 text-sm">
              <option>Sort by</option>
              <option>Newest</option>
              <option>Lowest Price</option>
            </select>
          </div>

          <div className="p-4">
          {/* 🔍 Search Bar */}
          <div className="relative w-full max-w-md mx-auto my-4">
           <input
           type="text"
           placeholder="Search houses..."
           className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
           value={searchQuery}
           onChange={(e) => setSearchQuery(e.target.value)}
         />
         <button
           onClick={handleSearch}
           className="absolute right-2 top-1/2 transform -translate-y-1/2 text-orange-500 hover:text-orange-600"
         >
          <FaSearch />
        </button>
      </div>
      </div>

          {/* House Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {houses.map((house, i) => (
              <div
                key={`${house.id}-${i}`}
                className="bg-white border rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="relative">
                  <img src={house.image} alt={house.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded flex items-center">
                    <FaCamera className="mr-1" /> {house.photos}
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-md font-semibold">{house.title}</h2>
                  <p className="text-xs text-gray-500 mb-1">
                    {house.date} • {house.location}
                  </p>
                  <div className="text-orange-600 font-bold">{house.price}</div>
                  <div className="flex justify-between items-center mt-3">
                    <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm hover:bg-orange-600">
                      View Details
                    </button>
                    <FaRegBookmark className="text-gray-400 hover:text-orange-500 cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-10 flex justify-center items-center gap-2 text-sm">
            <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">‹</button>
            {[1, 2, 3, "...", 67, 68].map((num, idx) => (
              <button
                key={idx}
                className={`px-3 py-1 rounded ${
                  num === 1 ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {num}
              </button>
            ))}
            <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">›</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-center text-white/60 text-xs py-4">
        &copy; {new Date().getFullYear()} ONETH CORPORATION. All rights reserved.
      </footer>
    </div>
  );
}
