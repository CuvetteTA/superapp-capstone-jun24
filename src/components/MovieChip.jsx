import React from "react";
import styles from "../components/MovieSelection.module.css"

const MovieChip = ({ category, setSelectedMovies,setSelectedCategories }) => {
  const removeSelection = (category) => {
    setSelectedMovies((selectedMovies) =>
      selectedMovies.filter((movie) => movie !== category)
    );
    setSelectedCategories((selectedCategories) =>
      selectedCategories.filter((id) => id !== category.id)
    );
    //This will remove the border from movie catagories when we delete the selected category
  };
  return (
    <button className={styles.selectedCat} >
      {category.movie} <span className={styles.deleteSelection} onClick={() => removeSelection(category)}>X</span>
    </button>
  );
};

export default MovieChip;
