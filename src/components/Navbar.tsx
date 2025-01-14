import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='menu'>
        <Link href='/' className='hover:underline'>Home</Link>
        <Link href='#about' className='hover:underline'>Who we are</Link>
        <Link href='/' className='hover:underline'>Contact</Link>
        <Link href='/' className='hover:underline'>Videos</Link>
    </div>
  )
}

export default Navbar