import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-600">EcoTravel</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#features" className="hover:text-green-600">Why Us</a>
          <a href="#packages" className="hover:text-green-600">Packages</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>
        </nav>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
          Book Now
        </button>
      </div>
    </header>
  );
}
