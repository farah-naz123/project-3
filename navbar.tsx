import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-yellow-300 h-12 flex text-green-600 justify-between items-center'>
      <h1 className='ml-6 cursor-pointer'>Navbar</h1>
      <ul className=' flex gap-4 mr-4 cursor-pointer'>
        <li>
        <Link className='hover:text-orange-700 m-4' href="/">Home</Link>
        <Link className='hover:text-orange-700 m-4' href="/about">About</Link>
        <Link className='hover:text-orange-700 m-4' href="/contact">Contact</Link>
        <Link className='hover:text-orange-700 m-4' href="/service">Service</Link>
        </li>
 




      </ul>
    </div>
  )
}

export default Navbar;
