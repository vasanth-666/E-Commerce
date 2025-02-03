import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { FaHeart, FaStar } from 'react-icons/fa'
import { FaStarHalfStroke, FaTruckFast } from 'react-icons/fa6'
import { TbShoppingBagPlus } from 'react-icons/tb'
import RelatedProducts from '../components/RelatedProducts'
import Footer from '../components/Footer'

const Product = () => {
  const { productId } = useParams()
  const { products, currency, addToCart, getCartCount } = useContext(ShopContext)
  const [product, setProduct] = useState(null)
  const [image, setImage] = useState("")
  const [size, setSize] = useState("")
  const [addedEffect, setAddedEffect] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const fetchProductData = async () => {
    const selectedProduct = products.find((item) => item._id === productId)
    if (selectedProduct) {
      setProduct(selectedProduct)
      setImage(selectedProduct.image[0])
    }
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  const handleAddToCart = () => {
    if (size) {
      addToCart(product._id, size)
      setAddedEffect(true)
      setTimeout(() => setAddedEffect(false), 500)
    }
  }

  const toggleFavorite = () => {
    setIsFavorite(prev => !prev)
  }

  if (!product) {
    return <div className="flex justify-center items-center mt-16">Loading...</div>
  }

  return (
    <section>
      <div className='max-padd-container mt-8 xl:mt-6'>
        <div className='max-padd-container flex gap-12 flex-col xl:flex-row bg-white py-16 rounded-2xl'>
          <div className='flex flex-1 gap-x-2 xl:flex-1'>
            <div className='flexCenter flex-col gap-[7px] flex-wrap'>
              {product.image.map((item, i) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={i}
                  alt="productImg"
                  className='max-h-[89px] rounded-lg cursor-pointer transition-transform duration-200 transform hover:scale-105'
                />
              ))}
            </div>

            <div className='w-full flex justify-center'>
              <img
                src={image}
                alt="product main"
                className='rounded-xl bg-gray-10 max-w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] object-contain transition-transform duration-500'
              />
            </div>
          </div>

          <div className='flex-[1.5] rounded-2xl px-7'>
            <h3 className='h3 !my-2.5'>{product.name}</h3>
            <div className='flex items-baseline gap-x-5'>
              <h3 className='h3'>{currency}{product.price}</h3>
              <div className='flex gap-x-2 text-secondary mb-2'>
                <div className='flex gap-x-2 text-secondary text-xl'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                </div>
                <span>(122)</span>
              </div>
            </div>
            <p>{product.description}</p>
            <div className='flex flex-col gap-4 my-4 mb-5'>
              <div className='flex gap-2'>
                {[...product.sizes].sort((a, b) => {
                  const order = ["S", "M", "L", "XL", "XXL"]
                  return order.indexOf(a) - order.indexOf(b)
                }).map((item, i) => (
                  <button
                    onClick={() => setSize(item)}
                    key={i}
                    className={`${item === size ? "bg-tertiary text-white" : "border-slate-900/5"} border-[1.5px] border-tertiary h-8 w-10 bg-primary rounded-md`}
                    aria-label={`Select size ${item}`}
                    disabled={!product.sizes.includes(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className='flex items-center gap-x-3'>
              <button
                onClick={handleAddToCart}
                className={`relative w-1/2 py-1 px-2 rounded-xl text-white font-bold transition-transform duration-300 ease-in-out ${addedEffect ? 'scale-110 bg-gradient-to-r from-green-400 to-blue-500 shadow-lg' : 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-pink-500 hover:to-yellow-500'}`}
                disabled={!size}
              >
                Add to Cart <TbShoppingBagPlus />
                {getCartCount() > 0 && (
                  <span className='absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full transform translate-x-1/2 -translate-y-1/2'>
                    {getCartCount()}
                  </span>
                )}
              </button>
              <button
                onClick={toggleFavorite}
                className={`btn-light ${isFavorite ? 'text-red-500' : ''}`}
              >
                <FaHeart />
              </button>
            </div>

            <div className='flex items-center gap-x-2 mt-2'>
              <FaTruckFast className='text-lg' />
              <span className='medium-14'>Enjoy free delivery on qualifying orders!</span>
            </div>
            <hr className='my-4 w-2/3' />

            <div className='mt-2 flex flex-col gap-1'>
              <p>Authenticity You Can Trust</p>
              <p>Enjoy Cash on Delivery for Your Convenience</p>
              <p>Easy Returns and Exchanges Within 7 Days</p>
            </div>
          </div>
        </div>
        <RelatedProducts category={product.category} subCategory={product.subCategory} />
      </div>
      <Footer />
    </section>
  )
}

export default Product;
