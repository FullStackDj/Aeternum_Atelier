import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {backend_url, currency} from '../App'
import {toast} from 'react-toastify'
import {TbTrash} from 'react-icons/tb'

const List = ({token}) => {

  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backend_url + '/api/product/list')
      if (response.data.success) {
        setList(response.data.products)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backend_url + '/api/product/remove', {id}, {headers: {token}})
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className='pl-8'>
      <h3 className='h3'>All Products List</h3>
      <div className='flex flex-col gap-2 pt-4'>
        {list.map((item) => (
          <div key={item._id} className='flex items-center justify-between gap-3 p-2 bg-white rounded-xl'>
            <div className='flex items-center gap-3'>
              <img src={item.image[0]} alt='' className='w-12 rounded-lg'/>
              <h5 className='text-sm font-semibold'>{item.name}</h5>
            </div>
            <div className='flex items-center gap-6'>
              <p className='text-sm font-semibold'>{item.category}</p>
              <p className='text-sm font-semibold'>{currency}{item.price}</p>
              <TbTrash onClick={() => removeProduct(item._id)} className='cursor-pointer text-lg'/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
