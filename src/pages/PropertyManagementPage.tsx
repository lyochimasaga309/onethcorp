import React from "react";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

const PropertyManagement = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Apartment in Dar",
      location: "Mikocheni B",
      status: "Rented",
      owner: "ONETH CORP",
      image: "/images/property1.jpg",
    },
    {
      id: 2,
      title: "Beach Villa Zanzibar",
      location: "Nungwi",
      status: "Vacant",
      owner: "ONETH CORP",
      image: "/images/property2.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-black">
      {/* Header */}
      <header className="bg-black text-white py-4 px-6 shadow-md flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <FaBuilding className="text-yellow-500 text-2xl" />
          <h1 className="text-xl font-extrabold tracking-wide text-yellow-400">
            ONETH PROPERTY MANAGEMENT
          </h1>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white hidden sm:flex">
          <FaPlus className="mr-2" />
          Add New Property
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-grow px-6 py-8">
        <h2 className="text-2xl font-bold text-yellow-600 mb-6">
          Manage Your Properties
        </h2>

        {properties.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            <p>No properties added yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white shadow-md rounded-2xl overflow-hidden transition hover:shadow-lg"
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-black">
                    {property.title}
                  </h3>
                  <p className="text-sm text-gray-600 flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-blue-500" />
                    {property.location}
                  </p>
                  <p className="mt-2 text-sm">
                    <span className="font-semibold">Owner:</span>{" "}
                    {property.owner}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Status:</span>{" "}
                    <span
                      className={
                        property.status === "Rented"
                          ? "text-green-600 font-bold"
                          : "text-red-500 font-bold"
                      }
                    >
                      {property.status}
                    </span>
                  </p>

                  {/* Action Buttons */}
                  <div className="flex justify-end mt-4 space-x-2">
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1">
                      <FaEdit />
                    </Button>
                    <Button className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1">
                      <FaTrash />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-yellow-400 text-black text-center py-4 mt-8 shadow-inner">
        <p className="text-sm font-semibold">
          &copy; {new Date().getFullYear()} ONETH CORPORATION — All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default PropertyManagement;
