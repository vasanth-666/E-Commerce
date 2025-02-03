import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import Item from '../components/Item';
import ShowSearch from '../components/ShowSearch';

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const toggleFilter = (value, setState) => {
    setState((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const applyFilters = () => {
    let filtered = [...products];

    if (search && showSearch) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length) {
      filtered = filtered.filter((product) =>
        category.includes(product.category)
      );
    }

    if (subcategory.length) {
      filtered = filtered.filter((product) =>
        subcategory.includes(product.subcategory)
      );
    }

    return filtered;
  };

  const applySorting = (productsList) => {
    switch (sortType) {
      case 'low':
        return productsList.sort((a, b) => a.price - b.price);
      case 'high':
        return productsList.sort((a, b) => b.price - a.price);
      default:
        return productsList;
    }
  };

  useEffect(() => {
    let filtered = applyFilters();
    let sorted = applySorting(filtered);
    setFilteredProducts(sorted);
  }, [category, subcategory, sortType, products, search, showSearch]);

  return (
    <section className='max-padd-container'>
      <div className='flex flex-col sm:flex-row gap-8 mt-8 xl:mt-6'>
        <div className='min-w-60 bg-white p-4 rounded-2xl'>
          <ShowSearch />
          <div className='bg-primary ring-1 ring-slate-900/5 pl-5 py-3 mt-6 rounded-xl'>
            <h5 className='h5 mb-4'>Categories</h5>
            <div className='flex flex-col gap-2 text-sm font-light'>
              {["Men", "Women", "Kids"].map((cat) => (
                <label key={cat} className='flex gap-2 medium-14 text-gray-30'>
                  <input
                    onChange={(e) => toggleFilter(e.target.value, setCategory)}
                    type="checkbox"
                    value={cat}
                    className='w-3'
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          <div className='bg-primary ring-1 ring-slate-900/5 pl-5 py-3 mt-6 rounded-xl'>
            <h5 className='h5 mb-4'>Types</h5>
            <div className='flex flex-col gap-2 text-sm font-light'>
              {["Topwear", "Bottomwear", "Winterwear"].map((subcat) => (
                <label key={subcat} className='flex gap-2 medium-14 text-gray-30'>
                  <input
                    onChange={(e) => toggleFilter(e.target.value, setSubCategory)}
                    type="checkbox"
                    value={subcat}
                    className='w-3'
                  />
                  {subcat}
                </label>
              ))}
            </div>
          </div>

          <select
            onChange={(e) => setSortType(e.target.value)}
            className='medium-14 h-8 w-full border border-slate-900/5 bg-primary text-gray-30 rounded-lg px-2 outline-none mt-6'
          >
            <option className='font-medium text-sm' value="relevant">Sort by: Relevant</option>
            <option className='font-medium text-sm' value="low">Sort by: Low to High</option>
            <option className='font-medium text-sm' value="high">Sort by: High to Low</option>
          </select>
        </div>

        <div className='bg-white p-4 rounded-2xl'>
          <Title title={'Our Collection'} />
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-6'>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Item product={product} key={product._id} />
              ))
            ) : (
              <p className='capitalize'>No Products found for selected filters.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
