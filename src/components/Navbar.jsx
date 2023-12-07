import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
       <div className='font-bold text-2xl flex justify-between px-12 py-6'>
          <Link to='/'>HOME</Link>
          <div>ABOUT</div>
          <Link to='/searchcar'>SEARCH CAR</Link>
          <div>CONTACT US</div>
       </div>
    </>
  )
}

export default Navbar