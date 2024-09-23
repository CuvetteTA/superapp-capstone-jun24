import React from "react";
import styles from "./ProfileWidget.module.css";

const ProfileWidget = () => {
  const selectedCategory = JSON.parse(localStorage.getItem("selectedCatagory")) || [];
    const user =JSON.parse(localStorage.getItem("user")) || {};

  return (    
<div className="grid grid-cols-4 grid-rows-4 gap-10">
    <div className="row-span-4">
        <img src="images/avatar.png" className='h-full'/>
    </div>

    <div className="col-span-3 row-span-2 pt-4">
        <p className='text-2xl font-normal tracking-wider'>{user.name}</p>
        <p className='text-2xl font-normal tracking-wider'>{user.email}</p>
        <p className='text-5xl font-medium tracking-wider'>{user.username}</p>
    </div>

    <div className="col-span-3 row-span-2 col-start-2 row-start-3 pb-4 pr-4">        
        <div className="grid grid-cols-2 gap-4">
            {
                selectedCategory.map((item)=>{
                 return(  
                    <div key={item.id} className='py-2 px-6 rounded-full' style={{backgroundColor:"rgba(159, 148, 255, 1)"}}>
                        {item.category}
                    </div>
                 )
                })
            }
        </div>        
    </div>
</div>
    
  )
};

export default ProfileWidget;
