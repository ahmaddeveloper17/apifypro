import { Images } from '@/constants/constant'
import Image from 'next/image'
import React from 'react'

function SliderCard() {
  return (
    <div className=' rounded-lg'>
        <Image src={Images.img} className='w-48 rounded-lg ml-4'/>
        <h1 className=' text-xl font-bold'>Realy Lily Saloon</h1>
        <div className='flex gap-1'>
        <Image src={Images.star} width={15} height={15}  />
        <Image src={Images.star} width={15} height={15} />
        <Image src={Images.star} width={15} height={15} />
        <Image src={Images.star} width={15 } height={15} />
<p>(2.4)</p>
        </div>
        <div className='flex'>
        <Image src={Images.location} width={15} height={15}  />
        <h1 className=' text-xl font-bold'>Colombo</h1>
        </div>
    </div>
  )
}

export default SliderCard