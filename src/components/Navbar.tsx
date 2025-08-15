import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold">OnethCorp</h1>
      <div className="space-x-4">
        <a href="/" className="hover:text-yellow-400">Home</a>
        <a href="/login" className="hover:text-yellow-400">Login</a>
        <a href="/signup" className="hover:text-yellow-400">Signup</a>
      </div>
    </nav>
  );
};

export default Navbar;
