import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => {
        return <div key={index}>
          <h2>Name: {actor.name}</h2>
          <span>Movies:{actor.movies.map((movie, index) => {
            return <ul key={index}>
              <li>{movie}</li>
              </ul>
          })}</span>
        </div>
      })}
    </div>
  )
}

export default Actors;
