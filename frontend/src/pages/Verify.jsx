import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Verify = () => {
  const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext)
  const [serarchParams, setSearchParams] = useSearchParams()

  const success = serarchParams.get('success')
  const orderId = serarchParams.get('orderId')

  const verifyPayment = async () => {
    try {
      if (!token) {
        return null
      }
      const response = await axios.post(backendUrl + '/api/order/verifyStripe', { success, orderId }, { headers: { token } })
      if (response.data.success) {
        setCartItems({})
        navigate('/orders')
      } else {
        navigate('/')
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)

    }
  }

  useEffect(() => {
    verifyPayment()
  }, [token])
  return (
    <div>Verify</div>
  )
}

export default Verify