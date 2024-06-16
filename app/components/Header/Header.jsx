import { Images } from '@/constants/constant'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className=' h-[600px] w-full' >
       <p className=' text-center text-Accent pt-[400px] text-4xl font-extrabold '>Plan Your Events, Your Way</p>  
    <p className='text-Accent px-3  text-center text-sm sm:text-xl mt-8'>Find the best event vendors with thosands of trusted reviews </p>
    <div className='flex  items-center mt-20 justify-center'>
    <div className='bg-white w-[110px] hidden  sm:block sm:w-40 rounded-xl'>
        <div className='flex py-3 '>
            <p className='pr-4 pl-6'>Event Type</p>
            <Image src={Images.down} height={15} width={15} />
        </div>
    </div>
    <div className='bg-white w-[170px]  py-3 hidden  sm:block rounded-xl'>
        <div className='flex'>
            <p className='pr-4 pl-8'>Category</p>
            <Image src={Images.down} height={15} width={15} />
        </div>
    </div>
    <div className='bg-white w-[170px]  py-3 hidden  sm:block rounded-xl'>
        <div className='flex'>
            <p className='pr-4 pl-6'>SubCategory</p>
            <Image src={Images.down} height={15} width={15} />
        </div>
    </div>
    <div className='bg-white w-[170px]  py-3 hidden  sm:block rounded-xl'>
        <div className='flex'>
            <p className='pr-4 pl-12'>City</p>
            <Image src={Images.down} height={15} width={15} />
        </div>
    </div>
    <div className='flex gap-3  bg-[#42f5da] px-4 py-3 rounded-xl'>
        <Image src={Images.search} width={20} height={20} />
        <p>Search</p>
    </div>
</div>

    
    </div>
    
  )
}

export default Header