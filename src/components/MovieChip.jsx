import React from 'react'

const MovieChip = ({item, removeCategory}) => {
  return (
    <div className='bg-green-600 w-full rounded-full text-white px-3 py-1 font-roboto flex justify-between'>
      {item.category}
      <span 
      className='text-green-800 cursor-pointer'
      onClick={()=>removeCategory(item)}
      >
        X
      </span>
    </div>
  )
}

export default MovieChip