import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IconContext } from "react-icons";
import { IconType } from "react-icons";
import {
  FaHome,
  FaHotel,
  FaTruck,
  FaSignOutAlt,
  FaBuilding,
  FaBriefcase,
  FaMapMarkedAlt,
} from "react-icons/fa";

export default function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <IconContext.Provider value={{ size: "32" }}>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-gray-50 to-gray-100">
        {/* Navbar */}
        <header className="flex justify-between items-center px-6 py-4 bg-black text-white shadow-lg">
          <div className="flex items-center space-x-3">
            <img src="/images/oneth.png" alt="logo" className="h-10 w-auto" />
            <h1 className="text-xl font-extrabold tracking-wide">
              HOME <span className="text-yellow-400">DASHBOARD</span>
            </h1>
          </div>
          <Button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 flex items-center gap-2"
          >
            <FaSignOutAlt />
            Logout
          </Button>
        </header>

        {/* Main Content */}
        <main className="flex-grow px-6 py-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
            Welcome Back <span className="text-orange-500">👋</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           <Card
             icon={<FaHome size="text-orange-500 text-2xl mx-auto mb-4" />}
             title="House Renting"
             desc="Browse and manage rental properties."
             onClick={() => navigate("/house-renting")}
             color="bg-orange-500 hover:bg-orange-600"
           />

            <Card
              icon={<FaHotel size="text-yellow-500 mx-auto mb-4" />}
              title="Hotel Booking"
              desc="Book hotels or lodge rooms in your area."
              onClick={() => navigate("/hotel-booking")}
              color="bg-yellow-500 hover:bg-yellow-600"
            />

            <Card
              icon={<FaTruck size="text-blue-600 mx-auto mb-4" />}
              title="Delivery Services"
              desc="Order or schedule item delivery."
              onClick={() => navigate("/delivery")}
              color="bg-blue-500 hover:bg-blue-600"
            />

            <Card
              icon={<FaBuilding size="text-purple-600 mx-auto mb-4" />}
              title="Property Management"
              desc="Manage owned/managed properties, contracts & tenants."
              onClick={() => navigate("/property-management")}
              color="bg-purple-600 hover:bg-purple-700"
            />

            <Card
              icon={<FaBriefcase size="text-red-600 mx-auto mb-4" />}
              title="Investors & Reports"
              desc="Invest, view & manage reports, feedback and share contracts."
              onClick={() => navigate("/investors")}
              color="bg-red-600 hover:bg-red-700"
            />

            <Card
              icon={<FaMapMarkedAlt size="text-green-600 mx-auto mb-4" />}
              title="Land Acquisition"
              desc="Acquire, verify, and track land opportunities."
              onClick={() => navigate("/land-acquisition")}
              color="bg-green-600 hover:bg-green-700"
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-center text-white/60 text-xs sm:text-sm py-4">
          &copy; {new Date().getFullYear()} ONETH CORPORATION. All rights reserved.
        </footer>
      </div>
    </IconContext.Provider>
  );
}

type CardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  onClick: () => void;
  color: string;
};

function Card({ icon, title, desc, onClick, color }: CardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
      {icon}
      <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 text-center">{desc}</p>
      <Button className={`${color} text-white w-full py-2 rounded-lg`} onClick={onClick}>
        View
      </Button>
    </div>
  );
}
