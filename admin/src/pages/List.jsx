import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {backend_url} from '../App'
import {toast} from 'react-toastify'

const List = () => {

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

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className='pl-8'>
      <h3 className='h3'>All Products List</h3>
      <div className='flex flex-col gap-2 pt-4'>
        {list.map((item) => (
          <div key={item._id} className='p-2 bg-white rounded-xl'>
            <h5 className='text-sm font-semibold'>{item.name}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
