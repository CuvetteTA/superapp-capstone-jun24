import React from "react";

const MovieChip = ({ category, setSelectedMovies }) => {
  const removeSelection = (category) => {
    setSelectedMovies((selectedMovies) =>
      selectedMovies.filter((movie) => movie !== category)
    );
  };
  return (
    <button
      style={{
        backgroundColor: "#148A08",
        border: "none",
        borderRadius: "10px",
        color: "white",
        padding: "5px 10px",
        fontSize: "18px",
        cursor: "pointer",
        fontFamily: "roboto",
      }}
    >
      {category.movie}{" "}
      <span
        onClick={() => removeSelection(category)}
        style={{ color: "#085C00" }}
      >
        X
      </span>
    </button>
  );
};

export default MovieChip;
