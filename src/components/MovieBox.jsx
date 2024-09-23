import React, { useState } from 'react'

const pallete = [
    "bg-orange-600",
    "bg-pink-700",
    "bg-fuchsia-400",
    "bg-sky-400",
    "bg-lime-400",
    "bg-purple-500",
    "bg-rose-500",
    "bg-cyan-700",
    "bg-amber-500"
];

const MovieBox = ({
    item,
    selectedCategory,
    setSelectedCategory
}) => {

    const style = `aspect-square h-full flex flex-col justify-between rounded-2xl p-3 cursor-pointer ${pallete[item.id]}`;
    const styleOnSelected = `aspect-square h-full flex flex-col justify-between rounded-2xl p-3 cursor-pointer ${pallete[item.id]} border-4 border-green-600 shadow-lg shadow-green-400 bg-blend-normal`;
    

    const handleClick = ()=>{
        
        if(selectedCategory.includes(item))
        return;
        setSelectedCategory([
            ...selectedCategory,
            item
        ])

    }


  return (
    <div 
      className={selectedCategory.includes(item)? styleOnSelected : style}
      onClick={handleClick}
    >
        <p className='font-dmsans font-normal text-xl'>
            {item.category}
        </p>
        <img className=' w-full' src={`images/${item.category}.png`} alt="img" />
    </div>
  )
}

export default MovieBox