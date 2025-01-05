import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='menu'>
        <Link href='/' className='hover:underline'>Home</Link>
        <Link href='/' className='hover:underline'>About</Link>
        <Link href='/' className='hover:underline'>Contact</Link>
        <Link href='/' className='hover:underline'>Videos</Link>
    </div>
  )
}

export default Navbar