import React from "react";
import DarkMode from "./DarkMode";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/services" },
  { id: 3, name: "Kids Wear", link: "/#" },
  { id: 4, name: "Men's Wear", link: "/#" },
  { id: 5, name: "Electronics", link: "/#" },
];

const DropdownList = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-50">
      
      {/* Top Bar */}
      <div className="bg-[#4263eb]/40 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="text-xl font-bold flex items-center gap-2">
            <FiShoppingBag size={32} />
            Shop Me
          </a>

          {/* Right Section */}
          <div className="flex items-center gap-6">
            
            {/* Search */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-[#4263eb] dark:border-gray-500 dark:bg-slate-800"
              />
              <IoMdSearch className="text-slate-800 dark:text-white group-hover:text-[#4263eb] absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Order Button */}
            <button
              onClick={handleOrderPopup}
              className="bg-gradient-to-r from-[#4263eb] to-[#63e6be] transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-2 group"
            >
              <span className="hidden group-hover:block transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-lg" />
            </button>

            {/* Dark Mode Toggle */}
            <DarkMode />
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="flex justify-center bg-white dark:bg-gray-900">
        <ul className="sm:flex hidden items-center gap-6 py-3">
          
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block hover:text-[#4263eb] duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}

          {/* Dropdown */}
          <li className="group relative cursor-pointer">
            <div className="flex items-center gap-1">
              Trending
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </div>

            <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 text-black dark:text-white shadow-md rounded-md p-2 w-[180px] z-50">
              <ul>
                {DropdownList.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="block rounded-md p-2 hover:bg-[#4263eb]/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;