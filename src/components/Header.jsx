import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <div className='p-1'>
      <nav className='flex flex-col md:flex-row justify-between items-center bg-amber-100 p-3'>
        
        {/* Logo */}
        <img 
          src="https://tse3.mm.bing.net/th/id/OIP.H7-dkByCab6G0NaFR-U4SwHaHa?pid=Api&P=0&h=180" 
          alt="logo" 
          width="70px" 
          className='rounded-full mb-3 md:mb-0'
        />

        {/* Menu */}
        <ul className='flex flex-col md:flex-row gap-4 md:gap-10 items-center'>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="register">Register</NavLink>
          </li>
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
          <li>
            <NavLink to="technologies">Technologies</NavLink>
          </li>
        </ul>

      </nav>
    </div>
  )
}

export default Header