import React from "react";

export default function Features() {
  const features = [
    { title: "Eco-Friendly Stays", desc: "Partnered with sustainable hotels & lodges." },
    { title: "Carbon Offset", desc: "We offset your travel emissions with tree planting." },
    { title: "Local Experiences", desc: "Support communities and enjoy authentic culture." }
  ];

  return (
    <section id="features" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose EcoTravel?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
