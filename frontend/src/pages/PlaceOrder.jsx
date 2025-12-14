import React, {useContext, useState} from 'react'
import {ShopContext} from '../context/ShopContext'
import Footer from '../components/Footer'

const PlaceOrder = () => {
  const {navigate} = useContext(ShopContext)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  })

  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData((data) => ({...data, [name]: value}))
  }

  return (
    <section>
      <form className='max-padd-container'>
        <div className='max-padd-container py-10 bg-white rounded-2xl my-6 max-xl:mt-8'>
          <div className='flex flex-col xl:flex-row gap-20 xl:gap-28'>
            <div className='flex flex-1 flex-col gap-3 text-[95%]'>
              <h3 className='h3'>Delivery Information</h3>
              <div className='flex gap-3'>
                <input
                  onChange={onChangeHandler}
                  value={formData.firstName}
                  type='text'
                  name='firstName'
                  placeholder='First Name'
                  required
                  className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none'
                />
                <input
                  onChange={onChangeHandler}
                  value={formData.lastName}
                  type='text'
                  name='lastName'
                  placeholder='Last Name'
                  required
                  className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none'
                />
              </div>
              <input
                onChange={onChangeHandler}
                value={formData.email}
                type='email'
                name='email'
                placeholder='Email'
                required
                className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none'
              />
            </div>
            <div className='flex flex-1 flex-col'>
              <button type='button' onClick={() => navigate('/cart')} className='btn-secondary'>
                Back to Cart
              </button>
            </div>
          </div>
        </div>
      </form>
      <Footer/>
    </section>
  )
}

export default PlaceOrder