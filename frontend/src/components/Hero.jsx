import React from "react";

export default function Hero() {
  return (
    <section className="bg-green-50">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Travel <span className="text-green-600">Sustainably</span> & Explore the World
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            EcoTravel helps you experience breathtaking destinations while minimizing your carbon footprint.
          </p>
          <div className="space-x-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Start Your Journey
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1 mt-10 md:mt-0">
          <img
            src="https://media.istockphoto.com/id/1356557792/photo/friends-using-binoculars-in-a-forest.jpg?s=612x612&w=0&k=20&c=qseYV0RZxOniiimv45oyWWRwDAt_-FAxdqiFvJXFP5w="
            alt="Eco Travel"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
