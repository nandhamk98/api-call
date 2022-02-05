import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";

function AddMovie() {
  const [movieName, setMovieName] = useState("");
  const [posterLink, setPosterLink] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieTrailer, setMovieTariler] = useState("");
  const history = useHistory();

  const addMoviesThroughPost = (movieData) => {
    fetch("https://6197ebee164fa60017c22ebd.mockapi.io/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieData),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log("success : ", data);
      });
  };
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
          style={{ width: "100%", margin: "10px" }}
          onChange={(event) => {
            setMovieName(event.target.value);
          }}
        />
        <TextField
          id="outlined-name"
          label="Poster Link"
          style={{ width: "100%", margin: "10px" }}
          onChange={(event) => {
            setPosterLink(event.target.value);
          }}
        />
        <TextField
          id="outlined-name"
          label="Rating"
          style={{ width: "100%", margin: "10px" }}
          onChange={(event) => {
            setMovieRating(event.target.value);
          }}
        />
        <TextField
          id="outlined-name"
          label="Description"
          style={{ width: "100%", margin: "10px" }}
          onChange={(event) => {
            setMovieDescription(event.target.value);
          }}
        />
        <TextField
          id="outlined-name"
          label="Trailer"
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
          const obj = {
            name: movieName,
            poster: posterLink,
            rating: movieRating,
            summary: movieDescription,
            trailer: movieTrailer,
          };

          // setMovies([...movies, obj]);
          addMoviesThroughPost(obj);
          history.push("/movies");
        }}
      >
        Add Movie
      </Button>
    </div>
  );
}

export { AddMovie };
