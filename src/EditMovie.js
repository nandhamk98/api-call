import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

function EditMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch("https://6197ebee164fa60017c22ebd.mockapi.io/movies/" + id)
      .then((data) => data.json())
      .then((mvs) => {
        // console.log("movies", mvs);
        setMovie(mvs);
      });
  }, [id]);

  return movie ? <EditMovieSubComp movie={movie} /> : "";
}

function EditMovieSubComp({ movie }) {
  const [movieName, setMovieName] = useState(movie.name);
  const [posterLink, setPosterLink] = useState(movie.poster);
  const [movieRating, setMovieRating] = useState(movie.rating);
  const [movieDescription, setMovieDescription] = useState(movie.summary);
  const [movieTrailer, setMovieTariler] = useState(movie.trailer);

  const editMoviesThroughPut = (movieData) => {
    fetch("https://6197ebee164fa60017c22ebd.mockapi.io/movies/" + movie.id, {
      method: "PUT",
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
          const obj = {
            name: movieName,
            poster: posterLink,
            rating: movieRating,
            summary: movieDescription,
            trailer: movieTrailer,
          };

          editMoviesThroughPut(obj);
          // setMovies([...movies]);
          history.push("/movies");
        }}
      >
        Update Movie
      </Button>
    </div>
  );
}

export { EditMovie };
