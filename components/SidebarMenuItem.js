import React from 'react'

export default function SidebarMenuItem({text,Icon,active}) {
  return (
    <div className='hoverEffect md:justify-start  flex text-gray-700 p-2 text-lg sm:justify-center items-center space-x-3'>
      <Icon className='' />
      <span className={`${active && "font-bold"} hidden sm:inline` }>{text}</span>
    </div>
  )
}
