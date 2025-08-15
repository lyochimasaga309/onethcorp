import React from "react"
import { Routes, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import IntroPage from "./pages/IntroPage"
import Dashboard from "./pages/Dashboard";
import PropertyManagementPage from "./pages/PropertyManagementPage";
import LandAcquisitionPage from "./pages/LandAcquisitionPage";
import HouseRentingPage from "./pages/HouseRentingPage";
import HotelBookingPage from "./pages/HotelBookingPage"
import InvestorsPage from "./pages/InvestorsPage"
import DeliveryPage from "./pages/DeliveryPage"
import DeliveryRequestPage from "@/pages/DeliveryRequestPage";
import AddHouseForm from "./pages/AddHouseForm";
import HouseDetailsPage from "./pages/HouseDetailsPage";
import HotelDetailsPage from "./pages/HotelDetailsPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { PropertyCard } from "./components/PropertyCard"
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/property-management" element={<PropertyManagementPage />} />
      <Route path="/land-acquisition" element={<LandAcquisitionPage />} />
      <Route path="/house-renting" element={<HouseRentingPage />} />
      <Route path="/house/:id" element={<HouseDetailsPage />} />
      <Route path="/admin/add-house" element={<AddHouseForm />} />
      <Route path="/hotel-booking" element={<HotelBookingPage />} />
      <Route path="/hotel/:id" element={<HotelDetailsPage />} />
      <Route path="/Investors" element={<InvestorsPage />} />
      <Route path="/delivery" element={<DeliveryPage />} />
      <Route path="/delivery/:id/request" element={<DeliveryRequestPage />} />
    </Routes>
  );
}

export default App;

