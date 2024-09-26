import React from "react";
import { useState, useEffect } from "react";
import fetchWeather from "../api/fetchWeather";
import formatDateAndTime from "../utils/formatDateAndTime";
import styles from "./WeatherWidget.module.css";

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState({});
  const [dateTime, setDateTime] = useState();

  useEffect(() => {
    // Fetch the weather data from the API
    const baseUrl = "http://api.weatherapi.com/v1/current.json";
    const queryParams = new URLSearchParams({
      // key: "",
      q: "New Delhi",
    });

    const urlWithParams = `${baseUrl}?${queryParams.toString()}`;

    fetch(urlWithParams)
      .then((response) => response.json())
      .then((data) => {
        const { temp_c, condition, pressure_mb, wind_kph, humidity } =
          data.current;
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
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <div className={styles.temperature}>
                {weatherData.temperature}°C
              </div>
              <div className={styles.pressure}>
                <div style={{height:"50px", width:"40px"}}>
                 <img src="https://www.svgrepo.com/show/8257/thermometer.svg" alt="" style={{height:"50px", width:"40px",objectFit:"contain"}}/>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems:"center",
                    flexDirection: "column",
                    flex: "grow",
                  }}
                >
                  <span>{weatherData.pressure} mb</span>
                  <span>Pressure</span>
                </div>
              </div>
            </div>
            <div className={styles.condition}>{weatherData.condition}</div>
            <div className={styles.details}>
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
