import React from 'react'
import {IoSparklesSharp} from 'react-icons/io'
import { HiSparkles } from 'react-icons/hi'
import Input from './Input'
import Post from './Post'

export default function Feed() {
  const posts=[
    {id:1,
      name:"Sahand Ghavidel",
      username:"codewithsahand",
      userImg:"https://media.istockphoto.com/id/544358212/photo/happy-laughing-man.jpg?b=1&s=170667a&w=0&k=20&c=M5crkeYnUB_8nXu9a_VuvyLoGV6RuHyUC9qMaERGPsM=",
      img:"https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      text:"nice view",
      timestamp:"two houres ago"

    },
    {id:2,
      name:"Sahand Ghavidel",
      username:"codewithsahand",
      userImg:"https://media.istockphoto.com/id/544358212/photo/happy-laughing-man.jpg?b=1&s=170667a&w=0&k=20&c=M5crkeYnUB_8nXu9a_VuvyLoGV6RuHyUC9qMaERGPsM=",
      img:"https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      text:"vow",
      timestamp:"two days ago"

    },
  ]
  return (
    <div className='sm:ml-[330px] max-w-xl flex-grow ml-[70px] sm:min-w-[500px] border-l border-r'>
      <div className='flex items-center border-gray-200 border-b sticky top-0 z-50 bg-white py-2 px-3 '>
        <h2 className='text-lg font-bold cursor-pointer'>Home</h2>
        <div className='hoverEffect p-3 ml-auto items-center justify-center'>
         <HiSparkles className='h-5 w-5 sm:w-6 sm:h-6' /> 
        </div>
      </div>

      <Input />
      {posts.map(post=>{
        return(
          <Post key={post.id} post={post} />
        )
      })}
    </div>
  )
}
