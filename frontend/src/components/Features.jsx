import React from 'react'
import Title from './Title'
import { TbArrowBackUp, TbTruckDelivery } from 'react-icons/tb'
import { RiSecurePaymentLine } from 'react-icons/ri'

const Features = () => {
  return (
    <section className='max-padd-container py-16'>
      <Title title={'Our Features'} titleStyles={'text-center'} />

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
        <div className='p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <TbArrowBackUp className='text-4xl mb-3 text-yellow-500' />
          <h4 className='text-2xl font-semibold capitalize text-tertiary'>Easy returns</h4>
          <p>Enjoy worry-free shopping with easy returns within 30 days. Your satisfaction is our priority.</p>
        </div>
        <div className='p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <TbTruckDelivery className='text-4xl mb-3 text-secondary' />
          <h4 className='text-2xl font-semibold capitalize text-tertiary'>Fast Delivery</h4>
          <p>Get your orders delivered swiftly and reliably right to your doorstep in record time.</p>
        </div>
        <div className='p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
          <RiSecurePaymentLine className='text-4xl mb-3 text-red-500' />
          <h4 className='text-2xl font-semibold capitalize text-tertiary'>Secure Payment</h4>
          <p>Your payment information is safe with us. We use the latest encryption technology to ensure security.</p>
        </div>
      </div>
    </section>
  )
}

export default Features
