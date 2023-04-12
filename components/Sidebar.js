import Image from 'next/image'
import React from 'react'
import SidebarMenuItem from './SidebarMenuItem'
import {HiDotsHorizontal} from 'react-icons/hi'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineBell} from 'react-icons/ai'
import {FaHashtag} from 'react-icons/fa'
import {BiEnvelope} from 'react-icons/bi'
import {FiBookmark} from 'react-icons/fi'
import {RiFileList2Line} from 'react-icons/ri'
import {CgProfile} from 'react-icons/cg'
import {CgMoreO} from 'react-icons/cg'

export default function Sidebar() {
  return (
    <div className='fixed min-h-full'>
        {/*Twitter logo */}
        <div className='hoverEffect hover:bg-blue-100'>
        <img className='rounded-full bg-inherit my-4'  width="50" height="50" src="https://www.uwindsor.ca/drama/sites/uwindsor.ca.drama/files/twitter_logo.jpeg" />
        </div>
        
         {/*Menu */}
          <SidebarMenuItem active="active" text="Home" Icon={AiFillHome} /> 
          <SidebarMenuItem text="Explore" Icon={FaHashtag} />
          <SidebarMenuItem text="Notifications" Icon={AiOutlineBell} />
          <SidebarMenuItem text="Messages" Icon={BiEnvelope} />
          <SidebarMenuItem text="Bookmarks" Icon={FiBookmark} />
          <SidebarMenuItem text="ClipboardIcon" Icon={RiFileList2Line} />
          <SidebarMenuItem text="UserIcon" Icon={CgProfile} />
          <SidebarMenuItem text="More" Icon={CgMoreO} />
          {/*Button */}
      <button   className='bg-blue-400 hidden sm:inline my-3 hover:brightness-95 shadow-md font-bold w-56 h-12 text-white rounded-full'>Tweet</button>

           {/*Mini Profile */}
           <div className='hoverEffect flex items-center mt-7'>
           <img className='h-10 w-10 rounded-full' src="https://media.istockphoto.com/id/544358212/photo/happy-laughing-man.jpg?b=1&s=170667a&w=0&k=20&c=M5crkeYnUB_8nXu9a_VuvyLoGV6RuHyUC9qMaERGPsM=" alt="image" />
           <div className='leading-5 hidden sm:inline'>
            <h4 className='font-bold'>Goran Kostic</h4>
            <p className='text-gray-500'>@codewithsahand</p>

           </div>
           <HiDotsHorizontal />
           </div>
          
           
    </div>
  )
}
