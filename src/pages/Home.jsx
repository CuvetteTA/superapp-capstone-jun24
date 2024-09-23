import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: "",
  });

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if(!data.name || data.name.trim() === ""){
      errors.name = "Name is required";
    }
    if (!data.username || data.username.trim() === "") {
      errors.username = "Username is required";
    }
    if (!data.email || data.email.trim() === "") {
      errors.email = "Email is required";
    }
    if (!data.mobile || data.mobile.trim() === "") {
      errors.mobile = "Mobile is required";
    }
    if (!data.checkbox) {
      errors.checkbox = "Checkbox is required";
    }

    setErrors(errors);

    if(Object.keys(errors).length > 0){
      return;
    }else{
      alert("Form Submitted Successfully");
      localStorage.setItem("user", JSON.stringify(data));
      setData({
        name: "",
        username: "",
        email: "",
        mobile: "",
        checkbox: false,
      });
      navigate("/selection");
    }


  }
  return (
    <>
    <div className="min-h-screen flex flex-col lg:flex-row">
        <div className='w-full lg:w-1/2 p-16 flex justify-center items-center bg-no-repeat bg-cover bg-center' style={{backgroundImage: "url(images/intro.png)"}}>
            <p className='font-roboto text-white text-3xl md:text-5xl font-black leading-10'>
                Discover new things on Superapp
            </p>
        </div>
        <div className='font-dmsans bg-black lg:w-1/2 px-12 md:px-32 py-8 md:py-20'>
            <img src="images/logo.png" alt="" className='w-40 h-10 mx-auto'/>
            <p className='font-normal text-white leading-5 mx-auto text-center my-4'>Create your new account</p>

            <form onSubmit={handleSubmit} className='flex-col w-full mt-12'>
                <input 
                type="text" 
                name="name" 
                placeholder='Name' 
                className='w-full h-10 px-3 my-2 bg-zinc-800 text-gray-300 focus:outline-0'
                value={data.name}
                onChange={handleInput}
                />
                <span className='h-5 text-red-700'>{errors.name}</span>

                <input 
                type='text' 
                name="username" 
                placeholder='Username' 
                className='w-full h-10 px-3 my-2 bg-zinc-800 text-gray-300 focus:outline-0'
                value={data.username}
                onChange={handleInput}
                />
                <span className='h-5 text-red-700'>{errors.username}</span>

                <input 
                type="email" 
                name="email" 
                placeholder='Email' 
                className='w-full h-10 px-3 my-2 bg-zinc-800 text-gray-300 focus:outline-0'
                value={data.email}
                onChange={handleInput}
                />
                <span className='h-5 text-red-700'>{errors.email}</span>

                <input 
                type="tel" 
                name="mobile" 
                placeholder='Mobile' 
                className='w-full h-10 px-3 my-2 bg-zinc-800 text-gray-300 focus:outline-0'
                value={data.mobile}
                onChange={handleInput}
                />
                <span className='h-5 text-red-700'>{errors.mobile}</span> 
                <br /> <br />

                <input 
                type="checkbox" 
                name="checkbox"
                onChange={handleInput}
                />
                <label htmlFor="check" className='text-zinc-500 mx-2 '>Share my registration data with Superapp</label><br />
                <span className='h-5 text-red-700'>{errors.checkbox}</span> 

                <button type="submit" className='bg-green-500 text-white rounded-3xl w-full h-10 font-semibold mt-12'>SIGN UP</button>
            </form>

            <p className='text-zinc-500 my-4 '>By clicking on Sign up. you agree to Superapp <span className='text-green-400'>Terms and Conditions of Use</span></p>
            <p className='text-zinc-500 '>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className='text-green-400'>Privacy Policy</span></p>
        </div>


    </div>
    </>
  );
}

// # Homework
//  Largest Contentful Paint (LCP)
//  First Input Delay (FID)
//  Cumulative Layout Shift (CLS)
//  First Contentful Paint (FCP)
//  Explore React Hook Forms