import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const addMovie = () => () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary,
    };

    setMovieList([...movieList, newMovie]);
    console.log(newMovie);
  };

  return (<div className="add-movie-form">
    <TextField
      label="Name"
      variant="outlined"
      onChange={(event) => setName(event.target.value)} />

    <TextField
      label="Poster"
      variant="outlined"
      onChange={(event) => setPoster(event.target.value)} />

    <TextField
      label="Rating"
      variant="outlined"
      onChange={(event) => setRating(event.target.value)} />

    <TextField
      label="Summary"
      variant="outlined"
      onChange={(event) => setSummary(event.target.value)} />


    <Button variant="contained" onClick={addMovie}>Add Movie</Button>
  </div>
  );
}
