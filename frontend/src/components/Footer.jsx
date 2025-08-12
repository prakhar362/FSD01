import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600">&copy; 2025 EcoTravel. All rights reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-green-600">Privacy</a>
          <a href="#" className="hover:text-green-600">Terms</a>
          <a href="#" className="hover:text-green-600">Support</a>
        </div>
      </div>
    </footer>
  );
}
