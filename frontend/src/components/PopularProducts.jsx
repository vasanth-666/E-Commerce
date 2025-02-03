import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Item from './Item';
import Title from './Title';

const PopularProducts = () => {
  const { products } = useContext(ShopContext);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const data = products.filter(item => item.popular === true);
      setPopularProducts(data.slice(0, 30));
    }
  }, [products]);

  return (
    <section className='max-padd-container py-16'>
      <Title title={'Popular Products'} titleStyles={'text-center'} />
      <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
        {popularProducts.map(product => (
          <div key={product._id}>
            <Item product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
