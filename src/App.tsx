import React from "react"
import { Routes, Route } from "react-router-dom";
import IntroPage from "./pages/IntroPage"
import Dashboard from "./pages/Dashboard";
import PropertyManagementPage from "./pages/PropertyManagementPage";
import LandAcquisitionPage from "./pages/LandAcquisitionPage";
import HouseRentingPage from "./pages/HouseRentingPage";
import HotelBookingPage from "./pages/HotelBookingPage"
import InvestorsPage from "./pages/InvestorsPage"
import DeliveryPage from "./pages/DeliveryPage"
import AddHouseForm from "./pages/AddHouseForm";
import HouseDetailsPage from "./pages/HouseDetailsPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { PropertyCard } from "./components/PropertyCard"

function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/property-management" element={<PropertyManagementPage />} />
      <Route path="/land-acquisition" element={<LandAcquisitionPage />} />
      <Route path="/house-renting" element={<HouseRentingPage />} />
      <Route path="/house/:id" element={<HouseDetailsPage />} />
      <Route path="/admin/add-house" element={<AddHouseForm />} />
      <Route path="/hotel-booking" element={<HotelBookingPage />} />
      <Route path="/Investors" element={<InvestorsPage />} />
      <Route path="/delivery" element={<DeliveryPage />} />
    </Routes>
  );
}

export default App;

