import { Images } from '@/constants/constant'
import Image from 'next/image'
import React from 'react'

function Popularg(props) {
  return (
    <div className=' rounded-lg'>
        <Image src={props.Img} className=' w-48 rounded-lg ml-4'/>
        <h1 className=' text-xl font-bold'>{props.name}</h1>
       
    </div>
  )
}

export default Popularg