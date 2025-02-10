import React from 'react'
import { BsFire } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='max-padd-container max-xl:mt-8 mb-16'>
      <div className='max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[736px] w-full rounded-tl-3xl rounded-tr-3xl mt-6'>
        <div className='relative  max-w-[600px] top-48'>
          <h5 className='flex items-baseline gap-x-2 uppercase text-secondary medium-18'>MODERN COLLECTION <BsFire /> </h5>
          <h1 className='h1 capitalize max-w-[611px]'>Elevate your Look with every click shop today</h1>
          <p className='pl-2 max-w-lg mt-6 mb-8 border-l-4 border-l-secondary'>Discover quality and style with our premium collection. Shop confidently for unique, fashionable pieces that elevate your Wardrobe!</p>
        </div>
      </div>
    </section>
  )
}

export default Hero