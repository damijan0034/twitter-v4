import React from 'react'
import {HiOutlinePhotograph,HiOutlineEmojiHappy} from 'react-icons/hi'


export default function Input() {
  return (
    <div className='flex border-b border-gray-200 p-3 space-x-3'>
        <img className='rounded-full w-11 h-11 cursor-pointer hover:brightness-95' src='https://media.istockphoto.com/id/544358212/photo/happy-laughing-man.jpg?b=1&s=170667a&w=0&k=20&c=M5crkeYnUB_8nXu9a_VuvyLoGV6RuHyUC9qMaERGPsM=' alt='image'/>
        <div className='w-full divide-y divide-gray-200'>
            <div className=''>
                <textarea className='w-full text-gray-700 border-none text-lg placeholder-gray-700 tracking-wide min-h-[50px]'  rows='2' placeholder="What's happening?"></textarea>
            </div>
            <div className='flex pt-2.5 items-center justify-between'>
                <div className='flex'>
                    <HiOutlinePhotograph className="w-10 h-10  hoverEffect p-2 text-sky-500 hover:bg-sky-200" />
                    <HiOutlineEmojiHappy className="w-10 h-10 hoverEffect p-2 text-sky-500 hover:bg-sky-200"/>
                </div>
                <button className='bg-blue-500 font-bold shadow-md px-4 py-1.5 rounded-full text-white hover:brightness-95 disabled:opacity-50' type="">Tweet</button>
            </div>
        </div>
    </div>
  )
}
