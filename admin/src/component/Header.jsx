import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flexCenter py-8 bg-white'>
        <Link to={'/'} className='bold-24 flex absolute -top-6 left-0 right-0 w-full flexCenter'>
            <h4 className='bg-white shadow-sm text-secondary flexCenter h-28 w-28 px-2 rounded-full'>Shopping</h4>
        </Link>
    </header>
  )
}

export default Header