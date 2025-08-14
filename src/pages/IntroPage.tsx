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
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const API = "https://onethcorp.onrender.com/api";
  console.log("API Base URL(hardcoded):", API);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || (!isLogin && (!fullName || !confirmPassword))) {
      alert("Please fill all required fields");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
    const data = isLogin
      ? await login(email, password)
      : await signup(fullName, email, password, confirmPassword);
    
    if (data.message) alert(data.message);
    if (isLogin && data.userId) navigate("/dashboard");

    console.log("Success:", data);
    alert(`${isLogin ? "Login" : "Signup"} successful!`);
    navigate("/dashboard");
  } catch (err) {
    console.error("Auth error:", err);
    alert("Authentication failed. Check console.");
   }
 };

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
          <div className="flex justify-center space-x-6 mt-6">
            <Button className="bg-orange-600 hover:bg-red-700 px-6 py-3 text-lg font-bold">Explore</Button>
            <Button className="bg-orange-600 hover:bg-red-700 px-6 py-3 text-lg font-bold">💬 Chat!</Button>
          </div>
        </div>

        {/* FLOATING LOGIN / SIGNUP BOX */}
        <div className="absolute top-20 right-8 bg-white shadow-xl rounded-xl w-80 p-6 z-10">
          <h2 className="text-xl font-bold mb-4 text-gray-800 text-center">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <Input
                name="fullName"
                id="fullName"
                autoComplete="name"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            )}
            <Input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              name="password"
              id="password"
              autoComplete={isLogin ? "current-password"  : "new-password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!isLogin && (
              <Input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                autoComplete="new-password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            )}
            <Button className="w-full bg-indigo-600 text-white" type="submit">
              {isLogin ? "Login" : "Create Account"}
            </Button>
          </form>
          <p className="text-center text-sm mt-4 text-gray-600">
            {isLogin ? "New here?" : "Already have an account?"}
            <button
              type="button"
              className="text-blue-600 font-medium ml-1"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
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
