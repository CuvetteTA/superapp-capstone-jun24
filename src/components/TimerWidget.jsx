import React, { useEffect, useState } from "react";
import styles from "./TimerWidget.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";

const HOURS_STEP = 3600;
const MINUTES_STEP = 60;
const SECONDS_STEP = 1;

const TimerWidget = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [cachedSeconds, setCachedSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const percentage = () => {
    return cachedSeconds > 0 ? (timeRemaining / cachedSeconds) * 100 : 0;
  };

  const formatTime = (time) => {
    return `${time.hours.toString().padStart(2, "0")} : ${time.minutes
      .toString()
      .padStart(2, "0")} : ${time.seconds.toString().padStart(2, "0")}`;
  };

  const stepHandler = (step) => {
    if (isRunning || (step < 0 && timeRemaining + step < 0)) return;
    setTimeRemaining((prev) => prev + step);
    setCachedSeconds((prev) => prev + step);
  };

  const parseTime = (time) => {
    const hours = Math.floor(time / HOURS_STEP);
    const minutes = Math.floor((time % HOURS_STEP) / MINUTES_STEP);
    const seconds = Math.floor(time % MINUTES_STEP);
    return { hours, minutes, seconds };
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTimeRemaining((totalSeconds) => {
          if (totalSeconds <= 0) {
            setIsRunning(false);
            return 0;
          }
          return totalSeconds - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <CircularProgressbar
          value={percentage()}
          text={formatTime(parseTime(timeRemaining))}
          styles={{
            path: {
              stroke: "#FF6A6A",
              strokeWidth: "3px",
              transition: "stroke-dashoffset 0.5s ease 0s",
            },
            trail: {
              stroke: "transparent",
            },
            text: {
              fill: "white",
              fontSize: "12px",
            },
          }}
        />
      </div>
      <div className={styles.right}>
        <div className={styles.configure}>
          <div className={styles.cell}>
            <p>Hours</p>
            <IoIosArrowUp
              onClick={() => stepHandler(HOURS_STEP)}
              size={"2em"}
            />
            <p className={styles.timerValues}>
              {parseTime(cachedSeconds).hours.toString().padStart(2, "0")}
            </p>
            <IoIosArrowDown
              onClick={() => stepHandler(-HOURS_STEP)}
              size={"2em"}
            />
          </div>
          <div className={styles.cell}>
            <p>Minutes</p>
            <IoIosArrowUp
              onClick={() => stepHandler(MINUTES_STEP)}
              size={"2em"}
            />
            <p className={styles.timerValues}>
              {parseTime(cachedSeconds).minutes.toString().padStart(2, "0")}
            </p>
            <IoIosArrowDown
              onClick={() => stepHandler(-MINUTES_STEP)}
              size={"2em"}
            />
          </div>
          <div className={styles.cell}>
            <p>Seconds</p>
            <IoIosArrowUp
              onClick={() => stepHandler(SECONDS_STEP)}
              size={"2em"}
            />
            <p className={styles.timerValues}>
              {parseTime(cachedSeconds).seconds.toString().padStart(2, "0")}
            </p>
            <IoIosArrowDown
              onClick={() => stepHandler(-SECONDS_STEP)}
              size={"2em"}
            />
          </div>
        </div>
        <button
          className={styles.timerButton}
          onClick={() => setIsRunning((prev) => !prev)}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default TimerWidget;
