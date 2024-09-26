import React, { useState, useEffect } from "react";
import fetchNews from "../api/fetchNews";
import styles from "./NewsWidget.module.css";
import SkeletonLoader from "./SkeletonLoader";
import moment from "moment";

const NewsWidget = () => {
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews().then((data) => {
      if (data.status === "ok") {
        const randomIndex = Math.floor(Math.random() * data.articles.length);
        setNews(data.articles[randomIndex]);
        setLoading(false);
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {loading ? (
          <SkeletonLoader height="200px" />
        ) : (
          <>
            <img
              className={styles.image}
              src={news?.urlToImage}
              alt="News Image"
            />
            <div className={styles.titleOverlay}>
              <p>{news?.title}</p>
              {news?.publishedAt && (
                <p className={styles.publishedDate}>
                  {moment(news.publishedAt).format("DD:MM:YYYY")}
                </p>
              )}
            </div>
          </>
        )}
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.body}>
          {loading ? (
            <SkeletonLoader count={2} height="20px" />
          ) : (
            <p>{news?.content}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsWidget;
