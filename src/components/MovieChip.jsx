import React from "react";

const MovieChip = ({ category, setSelectedMovies }) => {
  const removeSelection = (category) => {
    setSelectedMovies((selectedMovies) =>
      selectedMovies.filter((movie) => movie !== category)
    );
  };
  return (
    <button>
      {category.movie} <span onClick={() => removeSelection(category)}>X</span>
    </button>
  );
};

export default MovieChip;
