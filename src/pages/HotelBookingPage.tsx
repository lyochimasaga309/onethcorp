import React, { useState } from "react";
import HotelCard from "@/components/HotelCard";
import { useNavigate } from "react-router-dom";
import {
  FaHotel,
  FaMapMarkerAlt,
  FaCamera,
  FaRegBookmark,
  FaSearch,
  FaPlus,
  FaTimes,
} from "react-icons/fa";

interface Hotel {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  date: string;
  photos: number;
}

export default function HotelBookingPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [hotels, setHotels] = useState<Hotel[]>([
    {
      id: 1,
      name: "Lenny Hotel",
      location: "Geita",
      price: 250000,
      rating: 4.8,
      image: "/images/lenny.JPG",
      date: "Jul 28th, 2025",
      photos: 12,
    },
    {
      id: 2,
      name: "Gold Stone Hotel",
      location: "Geita",
      price: 400000,
      rating: 4.8,
      image: "/images/goldstone.JPG",
      date: "Jul 28th, 2025",
      photos: 8,
    },
    {
      id: 3,
      name: "Harvest Hotel",
      location: "Geita",
      price: 400000,
      rating: 4.8,
      image: "/images/harvest.JPG",
      date: "Jul 28th, 2025",
      photos: 8,
    },
    {
      id: 3,
      name: "Harvest Hotel",
      location: "Geita",
      price: 400000,
      rating: 4.8,
      image: "/images/harvest.JPG",
      date: "Jul 28th, 2025",
      photos: 8,
    },
    {
      id: 3,
      name: "Harvest Hotel",
      location: "Geita",
      price: 400000,
      rating: 4.8,
      image: "/images/harvest.JPG",
      date: "Jul 28th, 2025",
      photos: 8,
    },
    {
      id: 1,
      name: "Lenny Hotel",
      location: "Geita",
      price: 250000,
      rating: 4.8,
      image: "/images/lenny.JPG",
      date: "Jul 28th, 2025",
      photos: 12,
    },
    {
      id: 1,
      name: "Lenny Hotel",
      location: "Geita",
      price: 250000,
      rating: 4.8,
      image: "/images/lenny.JPG",
      date: "Jul 28th, 2025",
      photos: 12,
    },
    {
      id: 1,
      name: "Lenny Hotel",
      location: "Geita",
      price: 250000,
      rating: 4.8,
      image: "/images/lenny.JPG",
      date: "Jul 28th, 2025",
      photos: 12,
    },
  ]);
  const [showForm, setShowForm] = useState(false);

  const [newHotel, setNewHotel] = useState<Hotel>({
    id: hotels.length + 1,
    name: "",
    location: "",
    price: 0,
    rating: 0,
    image: "",
    date: new Date().toDateString(),
    photos: 0,
  });

  const handleSearch = () => {
    const filtered = hotels.filter(
      (hotel) =>
        hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hotel.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return filtered;
  };

  const handleAddHotel = () => {
    if (
      newHotel.name &&
      newHotel.location &&
      newHotel.price &&
      newHotel.image
    ) {
      setHotels([...hotels, { ...newHotel, id: hotels.length + 1 }]);
      setNewHotel({
        id: hotels.length + 2,
        name: "",
        location: "",
        price: 0,
        rating: 0,
        image: "",
        date: new Date().toDateString(),
        photos: 0,
      });
      setShowForm(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-black text-white shadow-lg">
        <div className="flex items-center space-x-3">
          <FaHotel className="text-yellow-400 text-2xl" />
          <h1 className="text-xl font-extrabold tracking-wide">
            HOTEL <span className="text-yellow-400">BOOKING</span>
          </h1>
        </div>
        <button
          className="bg-yellow-500 px-4 py-2 rounded text-sm hover:bg-yellow-600 flex items-center gap-2"
          onClick={() => setShowForm(true)}
        >
          <FaPlus /> Add Hotel
        </button>
      </header>

      {/* Search Bar */}
      <div className="flex justify-center items-center p-6 gap-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search hotels..."
          className="border p-3 rounded-lg w-full max-w-md"
        />
        <button
          onClick={handleSearch}
          className="bg-yellow-500 p-3 rounded-lg hover:bg-yellow-600"
        >
          <FaSearch className="text-white" />
        </button>
      </div>

      {/* Hotel Listings */}
      <div className="p-6">
        <h1 className="text-3xl font-bold text-yellow-600 mb-6">
          Hotel Listings
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {handleSearch().map((hotel) => (
            <HotelCard
              key={hotel.id}
              id={hotel.id}
              image={hotel.image}
              name={hotel.name}
              location={hotel.location}
              price={hotel.price}
              rating={hotel.rating}
              action={
      <div className="flex justify-between items-center mt-3">
        <button
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm"
          onClick={() => navigate(`/hotel/${hotel.id}`)}
        >
          Book
        </button>
        <FaRegBookmark className="text-gray-400 hover:text-yellow-500 cursor-pointer ml-2" />
      </div>
    }
  />
))}
        </div>
      </div>

      {/* Add Hotel Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold mb-4 text-yellow-600">
              Add New Hotel
            </h2>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Hotel Name"
                className="w-full border p-2 rounded"
                value={newHotel.name}
                onChange={(e) =>
                  setNewHotel({ ...newHotel, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full border p-2 rounded"
                value={newHotel.location}
                onChange={(e) =>
                  setNewHotel({ ...newHotel, location: e.target.value })
                }
              />
              <input
                type="number"
                placeholder="Price"
                className="w-full border p-2 rounded"
                value={newHotel.price}
                onChange={(e) =>
                  setNewHotel({ ...newHotel, price: Number(e.target.value) })
                }
              />
              <input
                type="text"
                placeholder="Image Path (e.g. /images/hotel.jpg)"
                className="w-full border p-2 rounded"
                value={newHotel.image}
                onChange={(e) =>
                  setNewHotel({ ...newHotel, image: e.target.value })
                }
              />
              <button
                onClick={handleAddHotel}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 w-full"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-center text-white/60 text-xs py-4 mt-8">
        &copy; {new Date().getFullYear()} ONETH CORPORATION. All rights reserved.
      </footer>
    </div>
  );
}
