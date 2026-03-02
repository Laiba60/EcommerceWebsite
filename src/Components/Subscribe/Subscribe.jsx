import React from "react";

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="py-16 bg-gradient-to-r from-[#4263eb] to-[#63e6be] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-xl mx-auto text-center space-y-6">
          
          <h1 className="text-2xl sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>

          <p className="text-sm sm:text-base text-white/90">
            Subscribe to our newsletter and stay updated with latest offers.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            
            <input
              data-aos="fade-up"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full px-5 py-3 text-black focus:outline-none"
            />

            <button className="bg-black hover:bg-gray-900 transition duration-300 px-6 py-3 rounded-full">
              Subscribe
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Subscribe;