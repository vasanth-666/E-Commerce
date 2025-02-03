import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import Item from './Item'

const NewArrivals = () => {

    const { products } = useContext(ShopContext)
    const [newArrivals, setNewArrivals] = useState([])

    useEffect(() => {
        const data = products.slice(0, 50)
        setNewArrivals(data)
    }, [products])

    return (
        <section className='max-padd-container py-16'>
            <Title title={'New Arrivals'} titleStyles={'text-center'} />
            <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
                {newArrivals.map((product) => (
                    <Item key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}

export default NewArrivals