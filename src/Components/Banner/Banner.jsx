import React from 'react'
import BannerImg from '../../assets/4547829.jpg'
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiTruck } from "react-icons/gi"

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Image Section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt="Banner"
              className="w-full max-w-[450px] h-auto mx-auto object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center gap-6">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold"
            >
              Winter Sale up to 50% off
            </h1>

            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 leading-6"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore at mollitia odit sequi nulla odio ad dolorum nostrum vitae libero.
            </p>

            <div className="flex flex-col gap-4">

              <div className="flex items-center gap-4">
                <GrSecure className="h-12 w-12 p-3 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>

              <div className="flex items-center gap-4">
                <IoFastFood className="h-12 w-12 p-3 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>

              <div className="flex items-center gap-4">
                <GiTruck className="h-12 w-12 p-3 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Easy Payment Methods</p>
              </div>

              <div className="flex items-center gap-4">
                <GiTruck className="h-12 w-12 p-3 rounded-full bg-blue-100 dark:bg-blue-400" />
                <p>Get Offers</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Banner