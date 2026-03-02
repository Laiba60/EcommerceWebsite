import React from 'react'
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
const Dropdownlist=[
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
    <div>Navbar</div>
  )
}

export default Navbar