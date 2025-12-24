import React, {useState} from 'react'

const List = () => {
  const [list, setList] = useState([])

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
