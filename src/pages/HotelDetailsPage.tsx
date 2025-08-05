import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function HotelDetailPage() {
  const { id } = useParams();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  // Dummy hotel details (replace with actual fetch later)
  const hotel = {
    name: "Lenny Hotel",
    location: "Geita",
    description: "A luxurious beachfront hotel offering modern rooms, spa services, and excellent cuisine.",
    amenities: ["Free Wi-Fi", "Pool", "Gym", "Airport Shuttle", "Breakfast Included"],
    price: 250000,
    image: "/images/lenny.JPG",
  };

  const handleBooking = () => {
    alert(`Booking confirmed for ${guests} guest(s) from ${checkIn} to ${checkOut}`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-yellow-600">{hotel.name}</h1>
      <img src={hotel.image} alt={hotel.name} className="w-full h-50 object-cover rounded-xl" />

      <p className="text-gray-700">{hotel.description}</p>
      <div className="text-sm text-gray-600">
        <strong>Location:</strong> {hotel.location}
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-black">Amenities:</h2>
        <ul className="list-disc list-inside text-gray-600">
          {hotel.amenities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4 border-t pt-4 space-y-4">
        <h2 className="text-xl font-bold text-orange-600">Book This Hotel</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600">Check-In Date</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Check-Out Date</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600">Number of Guests</label>
            <input
              type="number"
              min={1}
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              className="w-full border rounded p-2"
            />
          </div>
        </div>

        <button
          className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded"
          onClick={handleBooking}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
