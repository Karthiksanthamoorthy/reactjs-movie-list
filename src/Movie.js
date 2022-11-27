import { Counter } from './Counter';
import { useState } from 'react';
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export function Movie({ movie }) {
  const styles = {
    color: movie.rating >= 8.5 ? "green" : "red",
  };
  const [show, setShow] = useState(true);
  return (
    <div className="movie-container">
      <img src={movie.poster} alt={movie.name} className="movie-poster" />
      <div className="movie-specs">
        <h1 className="movie-name">{movie.name}{" "}
        <IconButton
        color="primary"
        onClick={() => setShow(!show)} arial-label="Toggle summary">
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </h1>
        <p style={styles} className="movie-rating">⭐{movie.rating}</p>
      </div>
      
      {show ? <p className="movie-summary">{movie.summary}</p> : null}
      <Counter />
    </div>
  );
}
