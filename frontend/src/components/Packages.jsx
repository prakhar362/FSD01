import React from "react";

export default function Packages() {
  const packages = [
    { plan: "Weekend Escape", price: "$199", features: ["2 Nights", "Eco-Lodge Stay", "Guided Tour"] },
    { plan: "Adventure Week", price: "$699", features: ["7 Nights", "Multiple Destinations", "Activities Included"] },
    { plan: "Luxury EcoTrip", price: "Custom", features: ["5-Star Eco Resorts", "Private Guide", "Exclusive Access"] }
  ];

  return (
    <section id="packages" className="bg-green-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-12">Our Packages</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
              <h4 className="text-2xl font-bold mb-4">{pkg.plan}</h4>
              <p className="text-3xl font-bold text-green-600 mb-6">{pkg.price}</p>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((f, i) => (
                  <li key={i} className="text-gray-600">✔ {f}</li>
                ))}
              </ul>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
                Choose Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
