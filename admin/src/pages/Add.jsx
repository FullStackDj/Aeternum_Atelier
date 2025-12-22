import React, {useState} from 'react'
import upload_icon from '../assets/upload_icon.png'

const Add = ({token}) => {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)

  return (
    <form className='pl-8'>
      <div className='flex flex-col gap-y-2 medium-15'>
        <h3 className='h3'>Upload Image</h3>
        <div className='flex gap-2 pt-2'>
          <label htmlFor='image1'>
            <img src={image1 ? URL.createObjectURL(image1) : upload_icon} alt=''
                 className='w-16 h-16 aspect-square object-cover ring-1 ring-slate-900/5 rounded-lg'/>
            <input onChange={(e) => setImage1(e.target.files[0])} type='file' name='image' id='image1' hidden/>
          </label>
          <label htmlFor='image2'>
            <img src={image2 ? URL.createObjectURL(image2) : upload_icon} alt=''
                 className='w-16 h-16 aspect-square object-cover ring-1 ring-slate-900/5 rounded-lg'/>
            <input onChange={(e) => setImage2(e.target.files[0])} type='file' name='image' id='image2' hidden/>
          </label>
        </div>
      </div>
    </form>
  )
}

export default Add
