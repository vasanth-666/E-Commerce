import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Item from './Item';
import Title from './Title';

const PopularProducts = () => {
  const { products } = useContext(ShopContext);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      console.log('Fetched products:', products);
      const data = products.filter(item => item.popular === true);  

      console.log('Filtered popular products:', data); 

      setPopularProducts(data.slice(0, 5));  
    }
  }, [products]);  

  
  if (popularProducts.length === 0) {
    return <div>No popular products available</div>;
  }

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
