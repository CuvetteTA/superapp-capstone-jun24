import React, { useState, useEffect } from "react";
import fetchNews from "../api/fetchNews";
import styles from "./NewsWidget.module.css";
import formatDateAndTime from "../utils/formatDateAndTime";

const NewsWidget = () => {
  const [news, setNews] = useState();
  const [loading, setloading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    fetchNews().then((data) => {
      if (data.status == "ok") {
        const randomIndex = Math.floor(Math.random() * data.articles.length);
        setNews(data.articles[randomIndex]);
        setloading(false);
      }
    });
  }, []);

  const renderPublishedAt = (timestamp) => {
    const { date, time } = formatDateAndTime(timestamp);
    return `${date} | ${time}`;
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.skeletonContainer}>
          <div className={styles.skeletonHeader}>
            <div className={styles.skeletonImage}></div>
            <div className={styles.skeletonText}></div>
          </div>
          <div className={styles.skeletonBody}></div>
        </div>
      ) : (
        <>
          <div className={styles.header}>
            <div className={styles.imageWrapper}>
              {/* Image Element */}
              <img
                src={news?.urlToImage}
                alt="news"
                onLoad={() => setImageLoaded(true)} // Set imageLoaded to true once image loads
                style={{ display: imageLoaded ? "block" : "none" }} // Only show image if loaded
                className={styles.image}
              />
              {/* Skeleton for image loading */}
              {!imageLoaded && <div className={styles.imageSkeleton}></div>}
            </div>
            <div className={styles.heading}>
              <p>{news?.title}</p>
              <p>{renderPublishedAt(news?.publishedAt)}</p>
            </div>
          </div>
          <div className={styles.body}>
            <p>{news?.content}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default NewsWidget;
