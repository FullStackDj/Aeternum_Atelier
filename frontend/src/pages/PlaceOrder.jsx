import React, {useContext} from 'react'
import {ShopContext} from '../context/ShopContext'
import Footer from '../components/Footer'

const PlaceOrder = () => {
  const {navigate} = useContext(ShopContext)

  return (
    <section>
      <form className='max-padd-container'>
        <div className='max-padd-container py-10 bg-white rounded-2xl my-6 max-xl:mt-8'>
          <div className='flex flex-col xl:flex-row gap-20 xl:gap-28'>
            <div className='flex flex-1 flex-col gap-3 text-[95%]'>
              <h3 className='h3'>Delivery Information</h3>
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