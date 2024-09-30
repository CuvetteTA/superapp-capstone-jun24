import { React, useState, useEffect } from "react";
import { fetchedMovieData } from "../data/data.js";
import { generatePath } from "react-router-dom";

// This is the part you have to implement to get the genere names from the local storage.
const genreNames = [
  {
    id: 1,
    name: "Action",
  },
  {
    id: 2,
    name: "Drama",
  },
  {
    id: 3,
    name: "Romance",
  },
];

const genreIds = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

const Browse = () => {
  // Imitating an API endoint being hit and the data being stored, you can use this data to display the movies.
  const [fetchedMovies, setFetchedMovies] = useState(fetchedMovieData);
  let requiredGeneres = [];
  genreIds.forEach((genre) => {
    return genreNames.filter((data) => {
      if (data.name === genre.name) {
        requiredGeneres.push(genre);
      }
    });
  });

  useEffect(() => {
    if (requiredGeneres.length > 0) {
      requiredGeneres.map((genre) => {
        const url = `https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=${genre.id}&page=1`;

        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "e993172cb9mshe903c3eea123ab8p1b5e64jsn4184040bee05",
            "X-RapidAPI-Host": "advanced-movie-search.p.rapidapi.com",
          },
        };

        fetch(url, options).then(async (response) => {
          const res = await response.text();
        });
      });
    } else {
      null;
    }
  }, []);

  return (
    <div>
      {" "}
      Here are your Movies
      {requiredGeneres.map((genere) => {
        return (
          <>
            {/* name of the movie  */}
            <div key={genere.id}>{genere.name}</div>

            {/* Movie Data  */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
              }}
            >
              {fetchedMovies.results.map((movie) => {
                return (
                  // Original Title
                  <div
                    key={movie.original_title}
                    style={{
                      disaply: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    {movie.original_title}
                    <img
                      width={200}
                      hight={200}
                      src={movie.poster_path}
                      alt={movie.original_title}
                    />
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Browse;
