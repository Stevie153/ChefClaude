import React from 'react'
import { SiCodechef } from "react-icons/si";

const Header = () => {
  return (
    <header className='flex justify-center items-center border bg-slate-100 m-4 rounded-t-lg shadow-lg p-2'>
        <div className='flex justify-center items-center'>
          <SiCodechef className='text-green-700 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32' />
          <h1 className='text-xl sm:text-2xl lg:text-3xl mx-4 font-bold'>Chef Claude</h1>
        </div>
    </header>
  )
}

export default Header
