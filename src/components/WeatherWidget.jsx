import React from "react";
import { useState, useEffect } from "react";
import fetchWeather from "../api/fetchWeather";
import formatDateAndTime from "../utils/formatDateAndTime";
import styles from "./WeatherWidget.module.css";

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState();
  const [dateTime, setDateTime] = useState();

  useEffect(() => {
    // Fetch the weather data from the API
    fetchWeather().then((store) => {
      const { temp_c, condition, pressure_mb, wind_kph, humidity } =
        store
      setWeatherData({
        temperature: temp_c,
        condition: condition.text,
        thumbnail: condition.icon,
        pressure: pressure_mb,
        wind: wind_kph,
        humidity,
      });
    });
    // Get this from the utility Function defined in the utils folder
    const { date, time } = formatDateAndTime();
    setDateTime({ date, time });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {dateTime && (
          <>
            <p className={styles.data}>{dateTime.date}</p>
            <p className={styles.time}>{dateTime.time}</p>
          </>
        )}
      </div>
      <div className={styles.content}>
        {weatherData ? (
          <>
            <img
              className={styles.thumbnail}
              src={weatherData.thumbnail}
              alt="Thumbnail"
            />
            <div className={styles.temperature}>
              {weatherData.temperature}°C
            </div>
            <div className={styles.condition}>{weatherData.condition}</div>
            <div className={styles.details}>
              <div className={styles.detail}>
                <span>Pressure</span>
                <span>{weatherData.pressure} mb</span>
              </div>
              <div className={styles.detail}>
                <span>Wind</span>
                <span>{weatherData.wind} kph</span>
              </div>
              <div className={styles.detail}>
                <span>Humidity</span>
                <span>{weatherData.humidity}%</span>
              </div>
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default WeatherWidget;
