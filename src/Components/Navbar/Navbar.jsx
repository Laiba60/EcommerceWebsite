import React from 'react'
import DarkMode from "./DarkMode";

import {IoMdSearch} from 'react-icons/io'
import {FaCartShopping} from 'react-icons/fa6'
import {FaCaretDown} from 'react-icons/fa'
import {FiShoppingBag} from 'react-icons/fi'
const Menu = [
    {
        id:1,
        name:"Home",   
        link:"/#", 
    },
    {
        id:2,
        name:"TopRated",  
        link:"/services",  
    },
{
    id:3,
    name:"Kids Wear",
    link:"/#",
},
{
    id:3,
    name:"Men's Wear",
    link:"/#",
},
{    id:3,              
    name:"Electronics",
    link:"/#",
},
]
const DropdownList=[
    {
        id:1,
        name:"Trending Products",
        link:"/#",
    },
    {
        id:2,
        name:"Best Selling",
        link:"/#",
    }


]
const Navbar = ({handleOrderPopup}) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        <div className="bg-primary/40 py-2">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div>
                <a href="#" className="text-xl font-bold items-center flex gap-1">
                    <FiShoppingBag size={39}/>Shop Me</a>
            </div>
            <div className="flex justify-between items-center gap-6">
                <div className="relative group hidden sm:block">
                    <input type="text" placeholder="Search" className="w-50 sm:w-50 group-hover:w-75 transition-all duration-300 rounded-lg border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border focus:border-primary dark:border-gray-500 dark-bg-slate-800" />
                    <IoMdSearch className="text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
                </div>
                <button onClick={()=>{handleOrderPopup()}} className="bg-linear-to-t from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
                    <span className="group-hover:block hidden trasnition-all duration-200">Order</span>
                    <faCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer " />
                    </button>
                    <div>
                        <DarkMode/>
                    </div>

            </div>

        </div>

        </div>
        <div data-aos="zoom-in" className="flex justify-center">
           <ul className="sm:flex hidden items-center gap-4 justify-center">
      {Menu.map((data) => (
        <li key={data.id}>
          <a
            href={data.link}
            className="inline-block px-4 hover:text-primary duration-200"
          >
            {data.name}
          </a>
        </li>
      ))}
      <li className="group relative cursor-pointer ">
        <a href="#" className="flex items-center gap-0.5 py-2">
            Tranding Products
            <span><FaCaretDown className="transition-all duraton-200 group-hover:rotate-180"/></span>
        </a>
        <div className="absolute z-9999 hidden group:hover:block w-50 rounded-md bg-white p-2 text-black shadow-md ">
            <ul>
  {DropdownList.map((data) => {
    return (
      <li key={data.id}>
        <a
          href={data.link}
          className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
        >
          {data.name}
        </a>
      </li>
    );
  })}
</ul>

        </div>
      </li>
    </ul>

        </div>
    </div>
  )
}

export default Navbar