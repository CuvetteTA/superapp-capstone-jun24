import React from "react";
import styles from "../components/MovieSelection.module.css"

const MovieBox = ({ category, selectedMovies, setSelectedMovies, image }) => {

    const handleSelection = (category) => () => {
        if(selectedMovies.includes(category)){
            setSelectedMovies(selectedMovies.filter((movie) => movie !== category))
        } else {
            setSelectedMovies([...selectedMovies, category])
        }
    }

  return (
    <div
      style={{
        width: "150px",
        height: "150px",
        // backgroundColor: "lightblue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
        boarder: `2px solid ${
          selectedMovies.includes(category) ? "red" : "black"
        }`,
      }}
      onClick={handleSelection(category)}
    >
      <h1>{category.movie}</h1>
      <div>
        <img className={styles.categoryimage}  src={image} alt={category.movie} /></div>
    </div>
  );
};

export default MovieBox;
