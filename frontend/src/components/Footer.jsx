import React from 'react'
import { Link } from 'react-router-dom'
import { BsEnvelopeFill, BsFacebook, BsGeoAltFill, BsInstagram, BsLinkedin, BsTelephoneFill, BsTwitterX } from 'react-icons/bs'
const Footer = () => {
    return (
        <footer className='max-padd-container mt-10'>
            <div className='max-padd-container bg-black text-white py-10 rounded-tr-3xl rounded-tl-3xl'>
                <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
                    <div>
                        <Link to='/'>
                            <h4 className='bold-24 text-secondary'>Shoping</h4>
                        </Link>
                        <p className='text-white mt-5'>Crafted with care and dedication. Bringing quality and style right right to your doorstep. Your satisfaction is our Promise!</p>
                        <p className='mt-4 text-white/70'>Copyright 2024 Shopping. All rights reserved</p>
                    </div>
                    <div>

                        <h4 className='h4 mb-4'>Quick Links</h4>
                        <ul className='space-y-2 regular-15'>
                            <li className='text-gray-10'>
                                <a href="/about">About Us</a>
                            </li>
                            <li className='text-gray-10'>
                                <a href="/properties">Products</a>
                            </li>
                            <li className='text-gray-10'>
                                <a href="/services">Services</a>
                            </li>
                            <li className='text-gray-10'>
                                <a href="/contact">Contact</a>
                            </li>
                            <li className='text-gray-10'>
                                <a href="/privacy-policy">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='h4 mb-4'>Contact Us</h4>
                        <p className='text-gray-10 mb-2'><BsTelephoneFill className='inline-block mr-2' />+91 1234567890</p>
                        <p className='text-gray-10 mb-2'><BsEnvelopeFill className='inline-block mr-2' />{""}support@gmail.com</p>
                        <p className='text-gray-10 mb-2'><BsGeoAltFill className='inline-block mr-2' />123 shopping,salem,Tamilnadu</p>
                    </div>
                    <div>
                        <h4 className='h4 mb-4'>Follow Us</h4>
                        <div className='flex space-x-4 text-secondary'>
                            <a href="#"><BsFacebook /></a>
                            <a href="#"><BsTwitterX /></a>
                            <a href="#"><BsInstagram /></a>
                            <a href="#"><BsLinkedin /></a>
                        </div>
                    </div>
                </div>
                <div className='mt-10 text-center text-gray-100'>
                    <p>Powered by <a href="#">Shopping Team</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer