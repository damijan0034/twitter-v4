import React from 'react'
import {ImSearch} from 'react-icons/im'

export default function Widgets() {
  return (
    <div className='hidden md:inline-block ml-8 space-y-5'>
        <div className=' md:w-64 py-1.5     bg-white z-50 sticky top-0'>
            <div className='flex    relative p-2 items-center bg-white rounded-full'>
                <ImSearch className='z-50 text-gray-500' />
                <input className='absolute w-[80%] focus:shadow-lg bg-gray-100 focus:bg-white border-gray-700 text-gray-700 pl-11 rounded-full inset-0' type="text" placeholder='Search Twitter' />
            </div>
        </div>
       
    </div>
  )
}
