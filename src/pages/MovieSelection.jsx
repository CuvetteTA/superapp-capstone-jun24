import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieBox from "../components/MovieBox";
import MovieChip from "../components/MovieChip";
import styles from "../styles/MovieSelection.module.css";
import vector from "../assets/Vector.png";

const MOVIES = [
  {
    id: 0,
    movie: "Action",
    image: "action.jpg",
    backgroundColor: "#FF5209",
  },
  {
    id: 1,
    movie: "Drama",
    image: "image 2.png",
    backgroundColor: "#D7A4FF",
  },
  {
    id: 2,
    movie: "Romance",
    image: "image 3.png",
    backgroundColor: "#148A08",
  },
  {
    id: 3,
    image: "image 4.png",
    movie: "Thriller",
    backgroundColor: "#84C2FF",
  },
  {
    image: "image 6.png",
    id: 4,
    movie: "Horror",
    backgroundColor: "#902500",
  },
  {
    id: 5,
    movie: "Western",
    image: "image 8.png",
    backgroundColor: "#7358FF",
  },
  {
    id: 6,
    movie: "Fantasy",
    image: "image 9.png",
    backgroundColor: "#FF4ADE",
  },
  {
    id: 7,
    movie: "Fiction",
    image: "image 10.png",
    backgroundColor: "#E61E32",
  },
  {
    id: 8,
    movie: "Music",
    image: "image 11.png",
    backgroundColor: "#6CD061",
  },
];

export default function Selection() {
  const navigate = useNavigate();
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [alert, setAlert] = useState("");

  const removeAlert = () => {
    setAlert(null);
  };
  const moveNext = () => {
    if (selectedMovies.length < 3) {
      setAlert("Please select atleast 3 movies");
      return;
    } else {
      localStorage.setItem("selectedMovies", JSON.stringify(selectedMovies));
      setSelectedMovies([]);
      navigate("/carousel");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        height: "auto",
        minHeight: "100vh",
        padding: "5%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "5%",
          maxWidth: "500px",
        }}
      >
        <h1 className={styles.logo}>Super app</h1>
        <p
          style={{
            color: "white",
            fontSize: "58px",
            fontFamily: "roboto",
            maxWidth: "554px",
          }}
        >
          Choose your entertainment category
        </p>
        <div className={styles.movieChipContainer}>
          {selectedMovies.map((category) => (
            <p key={category.id} style={{ margin: "5px" }}>
              <MovieChip
                key={category.id}
                category={category}
                setSelectedMovies={setSelectedMovies}
              />
            </p>
          ))}
        </div>
        <div>
          {alert && (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src={vector} alt="" />
              <p style={{ color: "red", fontFamily: "roboto" }}>
                Minimum 3 category required
              </p>
            </div>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {MOVIES.map((category) => (
            <div key={category.id}>
              <MovieBox
                selectedMovies={selectedMovies}
                setSelectedMovies={setSelectedMovies}
                category={category}
                removeAlert={removeAlert}
              />
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={moveNext}
            style={{
              backgroundColor: "#148A08",
              color: "white",
              padding: "10px",
              paddingRight: "20px",
              paddingLeft: "20px",
              border: "none",
              borderRadius: "20px",
              fontSize: "12px",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

// Create an array of movies
// Create a grid of 3 x 3 each grid cell will be of similar dimentions
// grid template - reprating 3 times 1fr
// min 3 elements should be there
// submit our form

// {selectedMovies.length < 3 && (
//   <p
//     style={{
//       color: "red",
//     }}
//   >
//     Please select atleast 3 movies
//   </p>
// )}
