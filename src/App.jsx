import React, { use } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect,useState } from 'react'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  const [orderPopup,setOrderPopup] = useState(false)
  const handleordrPopup = () => {
    setOrderPopup(!orderPopup)
  }
  useEffect(() => {
    Aos.init({duration:2000,
      offset:100,
      easing:"ease-in-sine",
      delay:100,

    })
    Aos.refresh()
  },[])
  return (
   <>
   <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
    <Navbar/>

    <Banner/>

    

   </div>
   </>
  )
}

export default App