import Link from 'next/link'
import React from 'react'

function Cards({ title, desc, image, link }) {
  return (
    <div className='bg-white p-4 shadow-md rounded-md text-black text-center space-y-4 flex flex-col'>
        {image && (
          <img
            src={image}
            alt={title}
            className="relative z-20 aspect-video w-full object-cover rounded-md"
          />
        )}
        <h1 className='font-semibold text-xl'>{title}</h1>
        <p className='text-sm text-gray-600 flex-grow'>{desc}</p>
        
        {/* Only render the Link if link is defined */}
        {link ? (
          <Link 
            href={link} 
            className="mt-4 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
          >
            More
          </Link>
        ) : (
          <span className="mt-4 text-gray-400 text-xs italic">Details coming soon</span>
        )}
    </div>
  )
}

export default Cards