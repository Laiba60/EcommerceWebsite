import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[600px] sm:min-h-[700px] bg-gray-100 flex items-center dark:bg-slate-950 dark:text-white duration-200">
      
      {/* Background Shape */}
      <div className="absolute top-[-100px] right-0 w-[300px] h-[300px] bg-[#4263eb]/40 rounded-3xl rotate-45 -z-10"></div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-8">

                {/* Text Section */}
                <div className="flex flex-col justify-center gap-4 text-center sm:text-left order-2 sm:order-1">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                    {data.title}
                  </h1>

                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {data.description}
                  </p>

                  <div>
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-[#4263eb] to-[#63e6be] hover:scale-105 transition duration-300 text-white py-2 px-6 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>

                {/* Image Section */}
                <div className="order-1 sm:order-2 flex justify-center">
                  <img
                    src={data.img}
                    alt="hero"
                    className="w-[300px] sm:w-[400px] lg:w-[500px] object-contain"
                  />
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;