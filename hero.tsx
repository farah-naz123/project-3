import Link from 'next/link';
import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen w-{100%} bg-purple-500 text-2xl'>
      <h1>Hero</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </div>
  )
}

export default Hero;
