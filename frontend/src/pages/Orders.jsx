import React, {useContext, useEffect, useState} from 'react'
import {ShopContext} from '../context/ShopContext'
import axios from 'axios'

const Orders = () => {
  const {backendUrl, token, currency} = useContext(ShopContext)
  const [orderData, setOrderData] = useState([])

  const loadOrderData = async () => {
    try {
      if (!token) return null
      const response = await axios.post(
        backendUrl + '/api/order/userorders',
        {},
        {headers: {token}}
      )
      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse())
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadOrderData()
  }, [token])

  return (
    <section>
      <div className='max-padd-container'>
        <div className='max-padd-container py-10 bg-white rounded-2xl my-6 max-xl:mt-8'>
          <div className=''>
            <h3 className='h3'>Orders <span className='text-secondary'>List</span></h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Orders
