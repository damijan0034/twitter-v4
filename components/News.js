import Link from 'next/link'
import React from 'react'

export default function News({article}) {
  return (
    <>
        <Link href={article.url}>
            <div className='flex px-2 py-2 space-x-1 cursor-pointer transition duration-200 hover:bg-gray-200 items-center justify-between'>
              <div className='space-x-1'>
                <h6 className='font-bold text-sm'>{article.title}</h6>
                <p className='text-xs font-medium text-gray-500'>{article.source.name}</p>
              </div>
              <img className='rounded-xl' width="70" height="70" src={article.urlToImage} alt="image" />

            </div>
        </Link>
    </>
  )
}
