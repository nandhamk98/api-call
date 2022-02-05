import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";

function EditMovie({ setMovies, movies }) {
  const { id } = useParams();
  const movie = movies[id];
  const [movieName, setMovieName] = useState(movie.name);
  const [posterLink, setPosterLink] = useState(movie.poster);
  const [movieRating, setMovieRating] = useState(movie.rating);
  const [movieDescription, setMovieDescription] = useState(movie.summary);
  const [movieTrailer, setMovieTariler] = useState(movie.trailer);

  const history = useHistory();
  return (
    <div className="inputField">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-name"
          label="Movie Name"
          value={movieName}
          style={{ width: "100%", margin: "10px" }}
          onChange={(event) => {
            setMovieName(event.target.value);
          }}
        />
        <TextField
          id="outlined-name"
          label="Poster Link"
          value={posterLink}
          style={{ width: "100%", margin: "10px" }}
          onChange={(event) => {
            setPosterLink(event.target.value);
          }}
        />
        <TextField
          id="outlined-name"
          label="Rating"
          value={movieRating}
          style={{ width: "100%", margin: "10px" }}
          onChange={(event) => {
            setMovieRating(event.target.value);
          }}
        />
        <TextField
          id="outlined-name"
          label="Description"
          value={movieDescription}
          style={{ width: "100%", margin: "10px" }}
          onChange={(event) => {
            setMovieDescription(event.target.value);
          }}
        />
        <TextField
          id="outlined-name"
          label="Trailer"
          value={movieTrailer}
          style={{ width: "100%", margin: "10px" }}
          onChange={(event) => {
            setMovieTariler(event.target.value);
          }}
        />
      </Box>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={() => {
          movies[id] = {
            name: movieName,
            poster: posterLink,
            rating: movieRating,
            summary: movieDescription,
            trailer: movieTrailer,
          };

          setMovies([...movies]);
          history.push("/movies");
        }}
      >
        Update Movie
      </Button>
    </div>
  );
}

export { EditMovie };
