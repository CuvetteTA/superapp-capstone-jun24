import React from "react";
import styles from "../styles/DashboardPage.module.css";
import NewsWidget from "../components/NewsWidget";
import ProfileWidget from "../components/ProfileWidget";
import WeatherWidget from "../components/WeatherWidget";
import TimerWidget from "../components/TimerWidget";
import NotesWidget from "../components/NotesWidget";

const DashboardPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.flexContainer}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <ProfileWidget />
            <WeatherWidget />
          </div>
          <div className={styles.notesWidget}>
            <NotesWidget />
          </div>
        </div>
        <div>
          <TimerWidget />
        </div>
      </div>
      <div className={styles.newsWidget}>
        <NewsWidget />
      </div>
    </div>
  );
};

export default DashboardPage;
