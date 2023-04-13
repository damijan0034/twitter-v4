import React from 'react'
import {IoSparklesSharp} from 'react-icons/io'
import { HiSparkles } from 'react-icons/hi'
import Input from './Input'

export default function Feed() {
  return (
    <div className='sm:ml-[330px] max-w-xl flex-grow ml-[70px] sm:min-w-[500px] border-l border-r'>
      <div className='flex items-center border-gray-200 border-b sticky mt-0 z-50 bg-white py-2 px-3 '>
        <h2 className='text-lg font-bold cursor-pointer'>Home</h2>
        <div className='hoverEffect p-3 ml-auto items-center justify-center'>
         <HiSparkles className='h-5 w-5 sm:w-6 sm:h-6' /> 
        </div>
      </div>

      <Input />
    </div>
  )
}
