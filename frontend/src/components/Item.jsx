import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
  return (
    <div className="flex flex-col justify-between ring-1 ring-slate-900/5 rounded-xl bg-white overflow-hidden h-full">
      <Link to={`/product/${product._id}`} className="flexCenter relative">
        <img
          src={product.image[0]}
          alt="productimg"
          className="w-full h-48 object-contain transition-transform duration-300 hover:scale-105"
        />
      </Link>
      <div className="p-3 flex-1">
        <h4 className="h4 line-clamp-1 my-0">{product.name}</h4>
        <div className="flex justify-between pt-1">
          <p className="font-bold text-gray-600">{product.category}</p>
          <h5 className="h5 text-secondary pr-2">${product.price}.00</h5>
        </div>
        <p className="line-clamp-2 py-1 text-gray-500">{product.description}</p>
      </div>
    </div>
  )
}

export default Item
