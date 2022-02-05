import "./App.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import { MovieDetail } from "./MovieDetailComponent";
import Button from "@mui/material/Button";
import { EditMovie } from "./EditMovie";
import { Route, Switch, useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { AddMovie } from "./AddMovieComponent";
import { MovieList } from "./MovieListComp";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

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
                  {mode === "light" ? "Dark Mode" : "Light Mode"}
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
              <AddMovie />
            </Route>
            <Route path="/movies/edit/:id" exact>
              <EditMovie />
            </Route>
            <Route path="/movies/:id" exact>
              <MovieDetail />
            </Route>
            <Route path="/movies">
              <MovieList />
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
