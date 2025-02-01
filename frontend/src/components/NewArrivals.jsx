import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import Item from './Item'

const NewArrivals = () => {

    const { products } = useContext(ShopContext)
    const [newArrivals, setNewArrivals] = useState([])

    useEffect(() => {
        const data = products.slice(0, 10)
        setNewArrivals(data)
    }, [products])

    return (
        <section className='max-padd-container py-16'>
            <Title title={'New Arrivals'} titleStyles={'text-center'} />
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
                {newArrivals.map((product) => (
                    <div key={product.id} className="w-48 h-64 flex flex-col bg-white shadow-md rounded-lg overflow-hidden m-4">
                        <Item product={product} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default NewArrivals