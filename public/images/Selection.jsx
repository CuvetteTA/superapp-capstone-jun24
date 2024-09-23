import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import logo from '../assets/logo.png'
import warning from '../assets/warning.png'
import Card from '../components/Card'
import Chip from '../components/Chip'

const categories = [
  {
    id:0,
    category: 'Action'
  },
  {
    id:1,
    category: 'Drama'
  },
  {
    id:2,
    category: 'Romance'
  },
  {
    id:3,
    category: 'Thriller'
  },
  {
    id:4,
    category: 'Western'
  },
  {
    id:5,
    category: 'Horror'
  },
  {
    id:6,
    category: 'Fantasy'
  },
  {
    id:7,
    category: 'Music'
  },
  {
    id:8,
    category: 'Fiction'
  },
  
]

const Selection = () => {
  const navigate = useNavigate();
  
  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleNext = ()=>{
    if(selectedCategory.length < 3)
    return;

    localStorage.setItem("selectedCatagory", JSON.stringify(selectedCategory));
    setSelectedCategory([]);
    navigate('/Dashboard');
  }

  const removeCategory = (category)=>{
    setSelectedCategory(
      selectedCategory.filter((item)=> item.id !== category.id)
    )

  }

  return (
    <div className='min-h-screen flex flex-col lg:flex-row bg-black px-6 lg:px-28' >
      <div className='w-full lg:w-2/5 my-8 lg:my-32 font-roboto'>
        <img src={logo} className='w-40 h-10'/>
        <div className='w-full lg:w-2/3'>
        <p className='font-bold text-xl lg:text-4xl text-white my-10 leading-relaxed'>Choose your entertainment category</p>
        </div>

        <div className='lg:mr-24'>
        <div className='grid gap-4 grid-cols-2'>
        {
          selectedCategory.map((item)=>{
            return(
            <Chip 
            key = {item.id}
            item={item}
            removeCategory={removeCategory}
            />
            )
          })
        }
        </div>
        </div>

        { selectedCategory.length < 3 &&
          <p className='text-red-600 font-normal leading-6 flex mt-6'>
          <img src={warning} alt="" className='h-4 mr-2'/> 
          Minimum 3 category required
        </p>   
        }     
      </div>

      <div className='w-full lg:w-3/5 mt-4 lg:mt-24 lg:ml-20 mb-10'>
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 text-slate-50 mb-16">
          {
            categories.map((item)=> <Card
            key={item.id}
            item = {item}
            selectedCategory = {selectedCategory}
            setSelectedCategory = {setSelectedCategory} 
            />)
          }  
        </div>      

        <div className='flex justify-end'>
        <button 
        type="button" 
        className='bg-green-600 w-2/5 lg:w-1/5 rounded-full text-white py-2 font-roboto font-semibold text-lg '
        onClick={handleNext}
        >
          Next
        </button>
        </div>
      </div>

    </div>
  )
}

export default Selection