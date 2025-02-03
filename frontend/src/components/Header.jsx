import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { FaBarsStaggered } from 'react-icons/fa6';
import { GiBeachBag } from 'react-icons/gi';
import { TbArrowNarrowRight } from 'react-icons/tb';
import { FaSearch } from 'react-icons/fa';
import { ShopContext } from '../context/ShopContext';
import logoImg from '../assets/logo.webp';
import '../index.css';

const Header = () => {
    const { setShowSearch, getCartCount, token, setToken } = useContext(ShopContext);
    const [menuOpened, setMenuOpened] = useState(false);
    const navigate = useNavigate();

    const userEmail = token ? token.email : '';
    const firstLetter = userEmail ? userEmail.charAt(0).toUpperCase() : '';

    const toggleMenu = () => {
        setMenuOpened((prev) => !prev);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        navigate('/login');
    };

    return (
        <header className="py-4 w-full bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <img src={logoImg} alt="Logo" className="h-14 w-14 rounded-full shadow-md" />
                </Link>

                <div className="flex-1">
                    <Navbar
                        menuOpened={menuOpened}
                        toggleMenu={toggleMenu}
                        containerStyles={`${menuOpened
                            ? 'flex flex-col gap-y-10 h-screen w-[240px] absolute left-0 top-0 bg-white z-50 px-6 py-6 shadow-lg'
                            : 'hidden xl:flex gap-x-6 xl:gap-x-10 rounded-full px-3 py-1'
                            }`}
                    />
                </div>

                <div className="flex items-center gap-x-8">
                    {!menuOpened && (
                        <FaBarsStaggered onClick={toggleMenu} className="xl:hidden cursor-pointer text-2xl" />
                    )}
                    <FaSearch onClick={() => setShowSearch(prev => !prev)} className="text-lg cursor-pointer" />

                    <Link to="/cart" className="relative flex items-center">
                        <GiBeachBag className="text-[26px]" />
                        <span className="bg-secondary text-white text-xs absolute -top-2 right-0 flex items-center justify-center w-5 h-5 rounded-full shadow-inner">
                            {getCartCount()}
                        </span>
                    </Link>

                    <div className="relative group">
                        <div onClick={() => !token && navigate('/login')}>
                            {token ? (
                                <div className="w-12 h-12 border text-black text-xl flex items-center justify-center rounded-full cursor-pointer">
                                    {firstLetter}
                                </div>
                            ) : (
                                <button
                                    className="px-4 py-2 text-lg text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition duration-200"
                                    onClick={() => navigate('/login')}
                                >
                                    Login
                                </button>
                            )}
                        </div>
                        {token && (
                            <ul className="bg-white shadow-md p-3 w-36 ring-1 ring-gray-900/15 rounded absolute right-0 hidden group-hover:flex flex-col">
                                <li onClick={() => navigate('/orders')} className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 rounded">
                                    <p>Orders</p>
                                    <TbArrowNarrowRight className="text-[20px] opacity-60" />
                                </li>
                                <hr className="my-2" />
                                <li onClick={logout} className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 rounded">
                                    <p>Logout</p>
                                    <TbArrowNarrowRight className="text-[20px] opacity-60" />
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
