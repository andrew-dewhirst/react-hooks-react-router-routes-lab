import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => {
        return <div key={index}>
          <h2>Name: {movie.title}</h2>
          <p>Time: {movie.time}</p>
          <span>Genres:{movie.genres.map((genre, index) => {
            return <ul key={index}>
              <li>{genre}</li>
              </ul>
          })}</span>
        </div>
      })}
    </div>
  )
}

export default Movies;
