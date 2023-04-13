import React from 'react'
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import {BsChatDots,BsTrash3} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import {FiShare2} from 'react-icons/fi'
import {HiOutlineChartBar} from 'react-icons/hi'
import Image from 'next/image'

export default function Post({post}) {
  return (
    <div  className='flex p-3 cursor-pointer border-b border-gray-200'>
        
        {/*user image*/}
        
            <img  className='w-11  h-11 mr-4 rounded-full' src={post.userImg} alt="image" />
        
        
        {/*right side*/}
        <div className='flex-col flex items-start justify-between'>
        {/*header*/}
            <div className='flex  justify-between items-center space-x-2'>
            {/*user info*/}
            
            <h4 className='font-bold hover:underline text-[15px]'>{post.name}</h4>
            <span className='text-sm'>{post.username}</span>-
            <span className='text-sm hover:underline'>{post.timestamp}</span>
            
            
           
            
            {/*dot icon*/}
            <BiDotsHorizontalRounded className='w-10   hoverEffect p-2 hover:bg-sky-100 hover:text-sky-500' />
            </div> 
        
        <div className='flex-col'>
           {/*post text*/}
        <p className='text-gray-800 text-[15px]'>{post.text}</p>
        {/*post image*/}
        <img className='rounded-xl my-2' src={post.img} alt="" />
        {/*icons*/}
        </div>
        
        <div className='flex space-x-2 text-gray-500 p-2'>
            <BsChatDots className='hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100' />
            <BsTrash3 className='hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100'/>
            <AiOutlineHeart className='hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100'/>
            <FiShare2 className='hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100'/>
            <HiOutlineChartBar className='hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100'/>
            
        </div>
        </div>

    </div>
  )
}
