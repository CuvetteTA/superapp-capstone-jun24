import React, { useState, useEffect } from "react";
import fetchNews from "../api/fetchNews";
import styles from "./NewsWidget.module.css";
import formatDateTime from "../utils/formatDateAndTime";

const NewsWidget = () => {
  const [article, setArticle] = useState();
    const[dateTime, setDateTime] = useState({});
    
    useEffect(()=>{
        fetchNews()
        .then((data) => {
            if (data.status == "ok") {
              const randomIndex = Math.floor(Math.random() * data.articles.length);
              setArticle(data.articles[randomIndex]);
            }            
          });
          const {date, time} = formatDateTime();
          setDateTime({date,time});
          
    },[article])
    
    if(!article)
      return <h1 className="text-white text-center">Loading....</h1>

  return (
    <a href={article?.url}>
    <div className='h-4/6 bg-cover text-white flex flex-col justify-end cursor-pointer' style={{backgroundImage:`url(${article?.urlToImage})`}}>
        <div className='h-max opacity-80 bg-black p-4'>
            <p className='text-lg font-normal overflow-hidden'>{article?.title}</p>
            <p className='font-bold'>{dateTime.date}{' | '+dateTime.time}</p>
        </div>         
    </div>
    <div className='h-2/6 p-8 font-normal leading-6 text-justify bg-white'>
        <p> {article?.content} </p>
    </div>

    </a>
  );
};

export default NewsWidget;
