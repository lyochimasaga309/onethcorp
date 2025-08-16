import React from "react";
import {Routes, Route } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import IntroPage from "./pages/IntroPage";
import Dashboard from "./pages/Dashboard";
import PropertyManagementPage from "./pages/PropertyManagementPage";
import LandAcquisitionPage from "./pages/LandAcquisitionPage";
import HouseRentingPage from "./pages/HouseRentingPage";
import HotelBookingPage from "./pages/HotelBookingPage";
import InvestorsPage from "./pages/InvestorsPage";
import DeliveryPage from "./pages/DeliveryPage";
import DeliveryRequestPage from "./pages/DeliveryRequestPage";
import AddHouseForm from "./pages/AddHouseForm";
import HouseDetailsPage from "./pages/HouseDetailsPage";
import HotelDetailsPage from "./pages/HotelDetailsPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { PropertyCard } from "./components/PropertyCard";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<IntroPage />} />
      </Routes>
  );
}

export default App;
