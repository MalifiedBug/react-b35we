import { useParams } from "react-router-dom";

export function MovieDetails( { movieList }) {
  const { id } = useParams(); // extract id from URL
  const movie = movieList[id];
  return (
    <div className="movie-detail-container">
      <div className="movie-spec">
      <h2 className="movie-name">{movie.name}</h2>
      <p className="movie-rating">
⭐ {movie.rating}</p>
      </div>
      <p className="movie-summary">{movie.summary}</p>
      
    </div>
  );
}
