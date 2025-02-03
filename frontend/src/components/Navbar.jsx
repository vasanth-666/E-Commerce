import React from 'react'
import { FaRegWindowClose } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SiAtlassian, SiGooglehome, SiMaildotcom } from 'react-icons/si'
import { BsCollectionFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

const Navbar = ({ containerStyles, toggleMenu, menuOpened }) => {

  const navItems = [
    { to: '/', label: 'Home', icon: <SiGooglehome /> },
    { to: '/collection', label: 'collection', icon: <BsCollectionFill /> },
    { to: '/about', label: 'about', icon: <SiAtlassian /> },
    { to: '/contact', label: 'Contact', icon: <SiMaildotcom /> },

  ]

  return (
    <nav className={containerStyles} >
      {menuOpened && (
        <>
          <FaRegWindowClose onClick={toggleMenu} className='text-xl self-end cursor-pointer relative left-8 text-secondary' />

          <Link to={'/'} className='bold-24 mb-10 ' >
            <h4 className='text-secondary'>Shoping</h4>
          </Link>
        </>
      )}

      {navItems.map(({ to, label, icon }) => (
        <div key={label} className='inline-flex '>
          <NavLink to={to} className={({ isActive }) => isActive ? 'active-link flexCenter gap-x-2' : 'flexCenter gap-x-2'}
            onClick={menuOpened && toggleMenu}
          >{icon}
            <h5 className='medium-16'>{label}</h5>
          </NavLink>
        </div>
      ))}
    </nav>
  )
}

export default Navbar