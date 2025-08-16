import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

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
      </div>
    </>

    {/* HERO TEXT */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">About Us</h1>
          <p className="uppercase tracking-widest text-sm md:text-base mt-4 text-yellow-400">
            <h2>Who We Are</h2>
          </p>
          <p className="mt-2 max-w-xl mx-auto text-white text-sm md:text-lg font-light">
            ONETH CORPORATION Is a multi-service built to redefine convenience, quality and trust in 
            the real Estate, hospitality and service industries, from land management and house rentals to hotel bookings,
            restaurants Service, Sports, agriculture and deliveries. <br />
            We bring a diverse range of solutions under one trusted name.
          </p>
        </div>
 {/* Footer */}
      <footer className="bg-yellow-400 text-black text-center py-4 mt-8 shadow-inner">
        <p className="text-sm font-semibold">
          &copy; {new Date().getFullYear()} ONETH CORPORATION — All Rights Reserved
        </p>
      </footer>