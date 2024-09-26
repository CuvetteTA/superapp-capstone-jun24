import React, { useState, useEffect } from "react";
import fetchWeather from "../api/fetchWeather";
import formatDateAndTime from "../utils/formatDateAndTime";
import SkeletonLoader from "./SkeletonLoader"; // Import the SkeletonLoader
import styles from "./WeatherWidget.module.css";
import tempbar from "../assets/tempbar.png";
import wind from "../assets/wind.png";
import humidity from "../assets/humidity.png";

const CACHE_KEY = "weatherData";
const CACHE_TIMESTAMP_KEY = "weatherDataTimestamp";
const CACHE_EXPIRY = 5 * 60 * 1000; // 5 minutes in milliseconds

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState();
  const [dateTime, setDateTime] = useState();

  useEffect(() => {
    const { date, time } = formatDateAndTime();
    setDateTime({ date, time });

    const cachedData = localStorage.getItem(CACHE_KEY);
    const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);

    const isCacheValid =
      cachedTimestamp && Date.now() - cachedTimestamp < CACHE_EXPIRY;

    if (isCacheValid && cachedData) {
      setWeatherData(JSON.parse(cachedData));
    } else {
      // Fetch the weather data from the API
      fetchWeather().then((data) => {
        const { temp_c, condition, pressure_mb, wind_kph, humidity } =
          data.current;
        const newWeatherData = {
          temperature: temp_c,
          condition: condition.text,
          thumbnail: condition.icon,
          pressure: pressure_mb,
          wind: wind_kph,
          humidity,
        };
        setWeatherData(newWeatherData);
        // Store in local storage with the current timestamp
        localStorage.setItem(CACHE_KEY, JSON.stringify(newWeatherData));
        localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now());
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      {weatherData ? (
        <>
          <div className={styles.header}>
            <p className={styles.date}>{dateTime.date}</p>
            <p className={styles.time}>{dateTime.time}</p>
          </div>
          <div className={styles.content}>
            <div className={styles.leftColumn}>
              <img
                className={styles.thumbnail}
                src={weatherData.thumbnail}
                alt="Weather Thumbnail"
              />
              <p className={styles.condition}>{weatherData.condition}</p>
            </div>
            <div
              style={{
                height: "100px",
                width: "2px",
                backgroundColor: "white",
              }}
            ></div>
            <div className={styles.centerColumn}>
              <p className={styles.temperature}>{weatherData.temperature}°C</p>
              <div className={styles.detail}>
                <div>
                  <img src={tempbar} alt="Temperature Bar" />
                </div>
                <div>
                  <span>{weatherData.pressure} mb</span>
                  <p>Pressure</p>
                </div>
              </div>
            </div>
            <div
              style={{
                height: "100px",
                width: "2px",
                backgroundColor: "white",
              }}
            ></div>
            <div className={styles.rightColumn}>
              <div className={styles.detail}>
                <div>
                  <img src={wind} alt="Wind Icon" />
                </div>
                <div>
                  <p>{weatherData.wind} kph</p>
                  <p>Wind</p>
                </div>
              </div>

              <div className={styles.detail}>
                <div>
                  <img src={humidity} alt="Humidity Icon" />
                </div>
                <div>
                  <p>{weatherData.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <SkeletonLoader count={1} height="300px" /> // Adjust height to fit your container
      )}
    </div>
  );
};

export default WeatherWidget;
