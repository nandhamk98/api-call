import "./App.css";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { MovieComponent } from "./MovieComponent";
import { MovieDetail } from "./MovieDetailComponent";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { EditMovie } from "./EditMovie";
import { Route, Switch, useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const [movieName, setMovieName] = useState("");
  const [posterLink, setPosterLink] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieTrailer, setMovieTariler] = useState("");
  const [movies, setMovies] = useState([]);

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
        setMovies([...movies, data]);
      });
  };

  useEffect(() => {
    fetch("https://6197ebee164fa60017c22ebd.mockapi.io/movies")
      .then((data) => data.json())
      .then((mvs) => {
        console.log(mvs);
        setMovies(mvs);
      });
  }, []);

  const history = useHistory();
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Paper elevation={3} className="paper">
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ marginRight: "auto" }}
                >
                  Movie List
                </Typography>
                <Button
                  style={{ marginLeft: "auto" }}
                  color="inherit"
                  onClick={() => history.push("/")}
                >
                  Home
                </Button>
                <Button color="inherit" onClick={() => history.push("/movies")}>
                  List Movies
                </Button>
                <Button
                  color="inherit"
                  onClick={() => history.push("/add-movies")}
                >
                  Add Movies
                </Button>
                <Button
                  color="inherit"
                  onClick={() => setMode(mode === "light" ? "dark" : "light")}
                >
                  {mode === "light" ? "Light Mode" : "Dark Mode"}
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
          {/* <h1 className="heading">Movie List</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movie List</Link>
        </li>
        <li>
          <Link to="/add-movies">Add Movies</Link>
        </li>
      </ul> */}
          <Switch>
            <Route path="/add-movies" exact>
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
            </Route>
            <Route path="/movies/edit/:id" exact>
              <EditMovie movies={movies} setMovies={setMovies} />
            </Route>
            <Route path="/movies/:id" exact>
              <MovieDetail movielist={movies} />
            </Route>
            <Route path="/movies">
              <div className="movieList">
                {movies.map((movie, index) => (
                  <MovieComponent
                    poster={movie.poster}
                    name={movie.name}
                    rating={movie.rating}
                    description={movie.summary}
                    key={index}
                    id={index}
                    movies={movies}
                    setMovies={setMovies}
                  />
                ))}
              </div>
            </Route>
            <Route path="/" exact>
              <h3>Welcome to Movie List</h3>
            </Route>
            <Route path="**">
              <h1>Page Not Found</h1>
            </Route>
          </Switch>
        </Paper>
        {/* <ColorBox /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
