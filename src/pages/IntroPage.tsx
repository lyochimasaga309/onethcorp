import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { login, signup } from "@/api";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function IntroPage() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="relative min-h-screen slideshow-background">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="animated-gradient-overlay"></div>

        {/* NAVBAR */}
        <div className="w-full flex justify-between items-center px-8 py-4 bg-gradient-to-r from-[#0d1b2a] to-[#1b263b] text-white">
          <div className="flex items-center space-x-2">
            <img src="/images/oneth.png" alt=" " className="h-10 w-auto" />
            <h1 className="font-bold text-xl">
              ONETH{" "}
              <span className="text-gray-400 font-light">CORPORATION</span>
            </h1>
          </div>
          <nav className="flex space-x-6">
            <a className="text-yellow-500 font-semibold" href="#">Home</a>
            <a className="text-yellow-500 font-semibold" href="#">Properties</a>
            <a className="text-yellow-500 font-semibold" href="#">About Us</a>
            <a className="text-yellow-500 font-semibold" href="#">News</a>
            <a className="text-yellow-500 font-semibold" href="#">Team</a>
            <a className="text-yellow-500 font-semibold" href="#">Contact</a>
          </nav>
          <div className="flex space-x-3 text-white">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaYoutube />
          </div>
        </div>

        {/* HERO TEXT */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">Get Your Dream Home</h1>
          <p className="uppercase tracking-widest text-sm md:text-base mt-4 text-yellow-400">
            Powered by ONETH CORP.
          </p>
          <p className="mt-2 max-w-xl mx-auto text-white text-sm md:text-lg font-light">
            Trusted solutions for land acquisiton, Property management, house renting, hotel booking, and delivery Services across Tanzania.
          </p>
          
           {/* SIGNUP / LOGIN BUTTONS */}
          <div className="flex justify-center space-x-6 mt-6">
            <Button onClick={() => navigate("/signup")} className="bg-green-600 hover:bg-green-700 px-6 py-3 text-lg font-bold text-white rounded">
              Sign Up
            </Button>
            <Button onClick={() => navigate("/login")} className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-lg font-bold text-white rounded">
              Login
            </Button>
          </div>
        </div>
        
        {/* FLOATING CHAT BUTTON */}
        <Button className="fixed bottom-8 right-8 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full shadow-lg z-20">
          💬 Chat!
        </Button>
      </div>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-yellow-500 text-xl font-bold mb-4">ONETH CORPORATION</h2>
            <p>
              P.O. Box 585<br />
              Geita, Tanzania<br />
              Phone: +255 747 015 698<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+255 682 986 773<br />
              Email: onethcorporation@gmail.com
            </p>
          </div>

          <div>
            <h3 className="text-yellow-500 text-lg font-semibold mb-3">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Land Acquisition</a></li>
              <li><a href="#" className="hover:underline">Property Management</a></li>
              <li><a href="#" className="hover:underline">House Renting</a></li>
              <li><a href="#" className="hover:underline">Hotel Booking</a></li>
              <li><a href="#" className="hover:underline">Delivery</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-500 text-lg font-semibold mb-3">Marketing</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Promotions</a></li>
              <li><a href="#" className="hover:underline">Partnerships</a></li>
              <li><a href="#" className="hover:underline">Advertising</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-500 text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ONETH CORPORATION. All rights reserved.
        </div>
      </footer>
    </>
  );
}
