import { useState } from "react";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import IconButton from "@mui/material/IconButton";
import { Counter } from "./counter";
import InfoIcon from "@mui/icons-material/Info";
import { useHistory } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export function MovieComponent(props) {
  const ratingStyle = {
    color: props.rating >= 8 ? "green" : "red",
  };

  let history = useHistory();
  const [show, setShow] = useState(true);

  let id = props.id;
  return (
    <div className="movieComp">
      <img className="moviePoster" src={props.poster} alt={props.name}></img>
      <div className="movieName">
        <h6>
          {props.name}
          <IconButton
            aria-label="toggle description"
            color="primary"
            onClick={() => {
              console.log(show);
              setShow(!show);
            }}
          >
            {show ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}
          </IconButton>
        </h6>
        <h6 style={{ marginLeft: "auto" }}>
          <IconButton
            onClick={() => {
              history.push("/movies/" + id);
            }}
          >
            <InfoIcon />
          </IconButton>
        </h6>
        <h6 style={ratingStyle} className="movie-rating">
          ⭐️{props.rating}
        </h6>
      </div>

      {/* <p>Rating:{props.rating}⭐️</p> */}
      {show ? <p className="movieSummary">{props.description}</p> : ""}
      <div className="movie-action">
        <Counter />
        <div style={{ marginLeft: "auto" }}>
          <IconButton
            onClick={() => {
              history.push("/movies/edit/" + id);
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              const newMovieList = props.movies.filter(
                (movie, ind) => ind !== id
              );
              props.setMovies(newMovieList);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
