import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/Logo.webp';

const Header = () => {
  return (
    <header className='flex justify-center items-center py-3 bg-white'>
      <Link to="/" className='flex justify-center items-center'>
        <img
          src={logoImg}
          alt="Logo"
          className="h-20 w-20 rounded-full shadow-md" />
      </Link>
    </header>
  );
};

export default Header;
