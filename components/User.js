import Link from 'next/link'
import React from 'react'

export default function User({user}) {
  return (
    <div className='flex cursor-pointer hover:bg-gray-200 items-center px-4 py-2'>
        <img width='40' className='rounded-full' src={user.picture.thumbnail} alt="image" />
        <div className='leading-5 ml-2 truncate'>
            <h4 className='font-bold hover:underline text-sm truncate'>{user.login.username}</h4>
            <h5 className='text-[13px] text-gray-500 truncate'>{user.name.first +' '+ user.name.last}</h5>
        </div>
        <button className='ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold' type="">Follow</button>
    </div>
        
    
  )
}
