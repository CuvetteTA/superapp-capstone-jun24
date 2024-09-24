import React, { useState, useEffect } from "react";
import fetchNews from "../api/fetchNews";
import styles from "./NewsWidget.module.css";
import formatDateAndTime from "../utils/formatDateAndTime";

const NewsWidget = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    fetchNews().then((data) => {
      if (data.status == "ok") {
        const randomIndex = Math.floor(Math.random() * data.articles.length);
        setNews(data.articles[randomIndex]);
      }
    });
  }, []);

  const renderPublishedAt = (timestamp) => {
    const { date, time } = formatDateAndTime(timestamp);
    return `${date} | ${time}`;
  };

  return (
    <div className={styles.container}>


      <>
        <div className={styles.header}>
          <img src={news?.urlToImage} alt="News Image" />
          <div>
            <p>{news?.title}</p>
            <p>{news?.publishedAt}</p>
          </div>
        </div>
        <div className={styles.body}>
          <p>{news?.content}</p>
        </div>
      </>
    </div>
  );
};

export default NewsWidget;
