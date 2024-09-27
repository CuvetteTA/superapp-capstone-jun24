import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieBox from "../components/MovieBox";
import MovieChip from "../components/MovieChip";
import styles from "../components/MovieSelection.module.css"
import actionImage from '../assets/action.jpg';
import dramaImage from '../assets/drama.png'
import romanceImage from '../assets/romance.png'
import thrillerImage from '../assets/thriller.png'
import horrorImage from '../assets/horror.png'
import westernImage from '../assets/western.png'
import fantasyImage from '../assets/fantasy.png'
import fictionImage from '../assets/fiction.png'
import musicImage from '../assets/music.png'

const MOVIES = [
  {
    id: 0,
    movie: "Action",
    image: actionImage,
    color: "#FF5209",
  },
  {
    id: 1,
    movie: "Drama",
    image: dramaImage,
    color: "#D7A4FF",
  },
  {
    id: 2,
    movie: "Romance",
    image: romanceImage,
    color: "#148A08",
  },
  {
    id: 3,
    movie: "Thriller",
    image: thrillerImage,
    color: "#84C2FF",
  },
  {
    id: 4,
    movie: "Horror",
    image: horrorImage,
    color: "#902500",
  },
  {
    id: 5,
    movie: "Western",
    image: westernImage,
    color: "#7358FF",
  },
  {
    id: 6,
    movie: "Fantasy",
    image: fantasyImage,
    color: "#FF4ADE",
  },
  {
    id: 8,
    movie: "Music",
    image: musicImage,
    color: "#E61E32",
  },
  {
    id: 7,
    movie: "Fiction",
    image: fictionImage,
    color: "#6CD061",
  },
];

export default function Selection() {
  const selectCategoryBorder = {
    border: "5px solid #11b800",
  }
  const navigate = useNavigate();
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  //This UseState update the border of selected category

  const handleSelectCategory = (category) => {
    if (selectedCategories.includes(category.id)) {
      // Remove category if already selected
      setSelectedCategories((prev) => prev.filter(id => id !== category.id));
    } else {
      // Add category if not selected
      setSelectedCategories((prev) => [...prev, category.id]);
    }
  };

  
  const moveNext = () => {

    if (selectedMovies.length < 3) {
      alert("Please select atleast 3 movies");
      <div>
      <p>Please select atleast 3 movies</p>
      </div>
      
      return;
    }else{
        localStorage.setItem("selectedMovies", JSON.stringify(selectedMovies));
        setSelectedMovies([]);
        navigate("/info")
    }
   
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.firstDiv}>
        <h2>Super app</h2>
        <h1>Choose your entertainment category</h1>
      <div className={styles.test}>
        {selectedMovies.map((category) => (
          <p key={category.id}>
            <MovieChip
              key={category.id}
              category={category}
              setSelectedMovies={setSelectedMovies}
              setSelectedCategories={setSelectedCategories}
            />
          </p>
        ))}
        </div>
        <div>
        {selectedMovies.length < 3 && (
        <p>
          <img src="../public/vector.png" alt="vector" /> Minimum 3 category required
        </p>  
      )}
      </div>
      </div>
      <div
        className={styles.secondDiv}
      >
        {MOVIES.map((category) => (
          <div style={{backgroundColor: category.color , ...(selectedCategories.includes(category.id) ? selectCategoryBorder : {})}} onClick={() => handleSelectCategory(category)} className={styles.categories} key={category.id}>
            
            <MovieBox
              selectedMovies={selectedMovies}
              setSelectedMovies={setSelectedMovies}
              category={category}
              image={category.image}
            />
            
          </div>
        ))}
      </div>
      <button className={styles.nextPageButton} onClick={moveNext}>Next Page</button>
      </div>
  );
}

// Create an array of movies
// Create a grid of 3 x 3 each grid cell will be of similar dimentions
// grid template - reprating 3 times 1fr
// min 3 elements should be there
// submit our form
