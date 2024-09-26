import React from "react";
import styles from "../styles/MovieBox.module.css";

const MovieBox = ({
  category,
  selectedMovies,
  setSelectedMovies,
  removeAlert,
}) => {
  const handleSelection = (category) => {
    if (selectedMovies.includes(category)) {
      setSelectedMovies(selectedMovies.filter((movie) => movie !== category));
    } else {
      setSelectedMovies([...selectedMovies, category]);
    }
  };

  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: `${category.backgroundColor}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "10px",
        border: `6px solid ${
          selectedMovies.includes(category) ? "#11B800" : "transparent"
        }`,
        borderRadius: "10px",
      }}
      onClick={() => {
        handleSelection(category);
        removeAlert();
      }}
    >
      <h1
        style={{
          fontSize: "26px",
          fontFamily: "DM Sans",
          padding: 0,
          paddingLeft: "2px",
          margin: 0,
          color: "white",
          textTransform: "uppercase",
          letterSpacing: "0.5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
      >
        {category.movie}
      </h1>
      <img
        className={styles.image}
        src={`/src/assets/${category.image}`}
        alt=""
      />
    </div>
  );
};

export default MovieBox;
