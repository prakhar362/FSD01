import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center">
        <div className="flex-1 z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-green-700 mb-6 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Sustainable Travel Made Easy
          </div>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Travel <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Sustainably</span>
            <br />& Explore the World
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
            Experience breathtaking destinations while minimizing your carbon footprint. Join thousands of conscious travelers making a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center group">
              Start Your Journey
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 px-8 py-4 rounded-full hover:bg-white hover:shadow-lg transition-all duration-200 font-semibold flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 011.5 1.5V12a1.5 1.5 0 01-1.5 1.5H9m0-4.5V9a1.5 1.5 0 011.5-1.5H12a1.5 1.5 0 011.5 1.5v1.5m-6 0h6" />
              </svg>
              Learn More
            </button>
          </div>
          
          {/* Stats */}
          <div className="flex items-center space-x-8 mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">50K+</div>
              <div className="text-sm text-gray-600">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">200+</div>
              <div className="text-sm text-gray-600">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">1M+</div>
              <div className="text-sm text-gray-600">Trees Planted</div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 mt-16 md:mt-0 relative">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl blur opacity-20"></div>
            <img
              src="https://media.istockphoto.com/id/1356557792/photo/friends-using-binoculars-in-a-forest.jpg?s=612x612&w=0&k=20&c=qseYV0RZxOniiimv45oyWWRwDAt_-FAxdqiFvJXFP5w="
              alt="Eco Travel"
              className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
            
            {/* Floating cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-lg animate-bounce">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Carbon Neutral</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg animate-bounce delay-1000">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🌍</span>
                <span className="text-sm font-medium">Eco Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
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
