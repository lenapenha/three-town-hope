import Link from 'next/link'
import HamburgerMenu from '@/components/HamburguerMenu'

const Navbar = () => {
  return (
    <div className='menu'>
       <HamburgerMenu />
       <div className='hidden md:flex space-x-3 pr-4'>
        <Link href='/' className='hover:underline'>Home</Link>
        <Link href='#about' className='hover:underline'>Who we are</Link>
        <Link href='/' className='hover:underline'>Contact</Link>
        <Link href='/' className='hover:underline'>Videos</Link>
       </div>
    </div>
  )
}

export default Navbar