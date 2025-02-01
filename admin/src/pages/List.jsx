import React, { useState, useEffect } from 'react'
import { backend_url, currency } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'
import { TbTrash } from 'react-icons/tb'

const List = ({ token }) => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backend_url + '/api/product/list')
      if (response.data.success) {
        setList(response.data.products)
      } else {
        toast.error(error.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backend_url + '/api/product/remove', { id }, { headers: { token } })
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className='px-6 sm:px-10'>
      <h3 className='text-2xl font-bold text-secondary pb-4'>All Product List</h3>
      
      <div className='flex flex-col gap-3 pt-4'>
        {/* Table Header */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1.5fr_1fr_1fr] items-center py-2 px-3 border-b text-secondary bg-gray-10 font-semibold text-lg rounded-t-lg'>
          <h5>Image</h5>
          <h5>Name</h5>
          <h5>Category</h5>
          <h5>Price</h5>
          <h5>Remove</h5>
        </div>

        {/* Product Rows */}
        {list.map((item) => (
          <div 
            key={item._id} 
            className='grid grid-cols-[1.5fr_3fr_1.5fr] md:grid-cols-[1fr_3fr_1.5fr_1fr_1fr] items-center gap-3 p-2 bg-white shadow-md rounded-lg transition-all hover:shadow-lg'
          >
            <img src={item.image[0]} alt="" className='w-14 h-14 object-cover rounded-lg' />
            <h5 className='text-sm font-semibold truncate'>{item.name}</h5>
            <p className='text-sm font-semibold text-gray-500'>{item.category}</p>
            <div className='text-sm font-semibold text-primary'>{currency}{item.price}</div>
            <div>
              <TbTrash 
                onClick={() => removeProduct(item._id)} 
                className='text-red-500 hover:text-red-600 cursor-pointer text-xl transition-all'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
