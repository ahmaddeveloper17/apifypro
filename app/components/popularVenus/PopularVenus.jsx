import { Images } from '@/constants/constant'
import Image from 'next/image'
import React from 'react'

function PopularVenus(props) {
  return (
    <div className=' rounded-lg'>
        <Image src={props.Img} className=' w-48 rounded-lg ml-4'/>
        <h1 className=' text-xl font-bold'>{props.name}</h1>
       
        <div className='flex'>
        <Image src={Images.location} width={15} height={15}  />
        <h1 className=' text-sm '>Colombo</h1>
        </div>
<p className='text-[#42f5da]'> Rs.15,000 onward</p>
    </div>
  )
}

export default PopularVenus