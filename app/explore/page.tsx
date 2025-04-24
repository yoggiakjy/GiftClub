import React from 'react'
import Navbar from '../components/Navbar'
import { NavbarLinks } from '../lib/data'



const page = () => {
  return (
    <div className = "w-full h-screen flex flex-col justify-start items-center bg-[white]">
      <Navbar navbarItems={NavbarLinks} />
    </div>
    
  )
}

export default page