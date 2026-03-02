import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "White",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "Brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashion T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-[#4263eb]">
            Top Selling Products for You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold mt-2">
            Products
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-500 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sit asperiores modi asperiores modi.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center">
          
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 w-full max-w-[200px] hover:shadow-xl transition duration-300 group"
            >
              <div className="overflow-hidden rounded-md">
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="mt-3">
                <h3 className="font-semibold text-sm">
                  {data.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {data.color}
                </p>

                <div className="flex items-center gap-1 mt-1">
                  <FaStar className="text-yellow-400 text-sm" />
                  <span className="text-sm">{data.rating}</span>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#4263eb] hover:bg-[#364fc7] transition duration-300 text-white py-2 px-6 rounded-md">
            View All Products
          </button>
        </div>

      </div>
    </div>
  );
};

export default Products;