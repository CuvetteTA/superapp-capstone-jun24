import React from "react";
import styles from "./CarouselPage.module.css";
import NewsWidget from "../components/NewsWidget";
import ProfileWidget from "../components/ProfileWidget";
import WeatherWidget from "../components/WeatherWidget";

const CarouselPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.profileWidget}>
            <ProfileWidget />
          </div>
          <div className={styles.weatherWidget}>
            <WeatherWidget />
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.newsWidget}>
            <NewsWidget />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselPage;
