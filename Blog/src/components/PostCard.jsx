import React from 'react'
import appwrite from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({$id, title, featured_image}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-200 hover:shadow-lg transition duration-300'>
        
        <div className='w-full h-56 overflow-hidden'>
          <img
            src={appwrite.getFileURL(featured_image)}
            alt='Post'
            className='w-full h-full object-cover hover:scale-105 transition duration-300'
          />
        </div>

        <div className='p-5'>
          <h2 className='text-lg font-bold text-gray-900 line-clamp-2'>
            {title}
          </h2>
        </div>

      </div>
    </Link>
  )
}

export default PostCard