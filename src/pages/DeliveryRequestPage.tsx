import React from "react";
import { useParams } from "react-router-dom";

export default function DeliveryRequestPage() {
  const { id } = useParams();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send request to backend here
    alert("Request submitted successfully!");
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-yellow-600">
        Request Delivery Service #{id}
      </h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Delivery Address
          </label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Item Description
          </label>
          <textarea
            className="w-full border rounded px-3 py-2"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
