import { Movie } from "./Movie";
import { useState } from "react";
import { AddMovie } from "./AddMovie";

export function MovieList({ movieList }) {  
  return (
    <div>
      {/* <AddMovie movieList={movieList} setMovieList={setMovieList} /> */}
      {/* <Button variant="contained" onClick={addMovie}>Add Movie</Button> 
      </div> */} */
 
    <div className="movie-list">
      {movieList.map((mv) => (
        <Movie movie={mv} />
      ))}
        </div>
    </div>
  );
}


