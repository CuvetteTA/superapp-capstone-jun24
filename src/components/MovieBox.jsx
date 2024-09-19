import React from "react";

const MovieBox = ({ category, selectedMovies, setSelectedMovies }) => {

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
        backgroundColor: "lightblue",
        display: "flex",
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
    </div>
  );
};

export default MovieBox;
