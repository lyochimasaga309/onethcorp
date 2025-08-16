import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold">OnethCorp</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/login" className="hover:text-yellow-400">Login</Link>
        <Link to="/signup" className="hover:text-yellow-400">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
