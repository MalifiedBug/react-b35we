import { Counter } from "./Counter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';

export function Movie({ movie, id }) {
  // const movie = {
  //   name: "The Avengers",
  //   rating: 8,
  //   summary:"Marvel's The Avengers (classified under the name Marvel Avengers Assemble in the United Kingdom and Ireland), or simply The Avengers, is a 2012 American superhero film based on the Marvel Comics superhero team of the same name.",
  //   poster:"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
  // };
  const [show, setShow] = useState(true);

  const styles = {
    color: movie.rating >= 8 ? "green" : "red",
    fontWeight: "bold",
  };
  const navigate = useNavigate();

  // block = true
  // none -false
  //show = !true -> false
  //conditional styling
  // const summaryStyle = {
  //   display: show ? "block" : "none",
  // }
  //conditional rendering
  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name} />
      <div className="movie-spec">
        <h2 className="movie-name">{movie.name} - ID {id}
          <IconButton
            onClick={() => setShow(!show)}
            aria-label="Toggle description"
            color="primary">
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}

          </IconButton>


          <IconButton className="toggle-style"
            onClick={() => navigate(`/movie/${id}` )}
            aria-label="Info"
            color="primary">
            <InfoIcon />
          </IconButton>

        </h2>
        <p style={styles} className="movie-rating">
          ⭐ {movie.rating}</p>
      </div>


      {/* <p style= {summaryStyle} className="movie-summary">{movie.summary}</p> */}
      {show ? <p className="movie-summary">{movie.summary}</p> : null}
      <Counter />
    </div>
  );
}
