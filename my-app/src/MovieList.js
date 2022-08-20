import { useState } from "react";
import { Movie } from "./Movie";
import { INTIAL_MOVIE_LIST } from "./App";

export function MovieList({movieList, setMovieList}) {

 

  // const [movieList, setMovieList] = useState(INTIAL_MOVIE_LIST);

  return (
    <div>
      
      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie key={index} movie={mv} id={index} />
        ))}

      </div>
    </div>


  );
}
