import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
  { id: 1, name: "Victor", text: "Lorem ipsum dolor sit amet...", img: "https://picsum.photos/101/101" },
  { id: 2, name: "Satya Nadella", text: "Lorem ipsum dolor sit amet...", img: "https://picsum.photos/102/102" },
  { id: 3, name: "Virat Kohli", text: "Lorem ipsum dolor sit amet...", img: "https://picsum.photos/104/104" },
  { id: 4, name: "Sachin Tendulkar", text: "Lorem ipsum dolor sit amet...", img: "https://picsum.photos/103/103" },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
      { breakpoint: 10000, settings: { slidesToShow: 3 } },
    ],
  };

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm text-[#4263eb]">What our customers are saying</p>
          <h1 className="text-3xl font-bold mt-2">Testimonials</h1>
          <p className="text-xs text-gray-400 mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>

        <Slider {...settings}>
          {TestimonialData.map((data) => (
            <div key={data.id} className="px-4">
              <div className="bg-[#4263eb]/10 dark:bg-slate-600 p-6 rounded-xl shadow-md flex flex-col items-center gap-4">
                <img src={data.img} alt={data.name} className="w-20 h-20 rounded-full" />
                <p className="text-xs text-gray-500 dark:text-slate-300 text-center">{data.text}</p>
                <h2 className="text-lg font-bold text-black/80 dark:text-slate-100">{data.name}</h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;