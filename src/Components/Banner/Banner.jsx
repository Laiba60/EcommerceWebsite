import React from 'react'
import BannerImg from '../../assets/4547829.jpg'
import {GrSecure} from 'react-icons/gr'
import {IoFastFood} from 'react-icons/io5'
import { GiTruck } from "react-icons/gi"; // valid Game Icon

const Banner = () => {
  return (
    <div classname="min-h-[550px] flex justify-center items-center py-12 sm:py-0" >
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div data-aos="zoom-in">
                    <img src={BannerImg} alt="Banner" className="max-w-[400px] h-350px w-full mx-auto object-cover" />

                </div>
                <div className="flex flex-col justify-center gap-6 sm:pt-0">
                    <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">Winter Sale up to 50 percent off</h1>
                    <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-5">Lorelit. Omnis nihi impedit nam a!
                    Temporibus, inventore at mollitia odit sequi, nulla odio ad dolorum nostrum vitae libero, praesentium facere. Eligendi, est. Necessitatibus ipsa voluptatem voluptates quo, porro incidunt inventore ad, tenetur vitae eaque minima.
                    Mollitia perspiciatis, ipsam, tenetur quibusdam iusto pariatur suscipit nostrum consectetur aliquam quia aut. Aliquam maiores laudantium deserunt dolorum harum iusto nostrum facilis repellat temporibus eligendi labore, ipsam, a dolores atque.
                    atu recusandae ratione v architecto vel perferendis necessitatibus, aut exercitat</p>
                    <div classname=" flex flex-col gap-4px ">
                        <div data-aos="fade-up" className="flex items-center gap-4">
                            <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                            <p>Quality Products</p>

                        </div>
                        <div data-aos="" classname="flex items-center gap-4">
                            <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" /> 
                            <p>Fast Delivery</p>  

                        </div>
                        <div data-aos="" classname="flex items-center gap-4">
                            <GiTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" /> 
                            <p>Easy Payment methods</p>  

                        </div>
                        <div data-aos="" classname="flex items-center gap-4">
                            <GiTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" /> 
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