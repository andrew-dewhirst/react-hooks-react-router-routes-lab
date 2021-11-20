import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => {
        return <div key={index}>
          <h2>Name: {director.name}</h2>
          <span>Movies:{director.movies.map((movie, index) => {
            return <ul key={index}>
              <li>{movie}</li>
              </ul>
          })}</span>
        </div>
      })}
    </div>
  )
}

export default Directors;
