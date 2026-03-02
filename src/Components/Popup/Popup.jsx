import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  if (!orderPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setOrderPopup(false)}
      ></div>

      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg shadow-lg p-6 w-[90%] max-w-md duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">Order Now</h1>
          <IoCloseOutline
            className="text-2xl cursor-pointer hover:text-red-500 transition"
            onClick={() => setOrderPopup(false)}
          />
        </div>

        {/* Form */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 px-4 py-2 focus:outline-none focus:border-[#4263eb]"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 px-4 py-2 focus:outline-none focus:border-[#4263eb]"
          />

          <input
            type="text"
            placeholder="Address"
            className="w-full rounded-full border border-gray-300 dark:border-gray-600 dark:bg-gray-800 px-4 py-2 focus:outline-none focus:border-[#4263eb]"
          />

          <div className="flex justify-center pt-2">
            <button className="bg-gradient-to-r from-[#4263eb] to-[#63e6be] hover:scale-105 transition duration-300 text-white py-2 px-6 rounded-full">
              Order Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Popup;