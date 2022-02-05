import "./App.css";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function MovieDetail() {
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

  return movie ? <MovieDetailSubComp movie={movie} /> : "";
}

function MovieDetailSubComp({ movie }) {
  const history = useHistory();
  return (
    <div className="movie-detail">
      <div className="trailer">
        <iframe
          width="100%"
          height="534"
          src={movie.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="movie-info">
        <div className="movieDetail-info">
          <h3>{movie.name}</h3>
          <h3>{movie.rating}</h3>
        </div>
        <p>{movie.summary}</p>
      </div>
      <div className="BackButton">
        <Button
          variant="outlined"
          startIcon={<ArrowBackIosIcon />}
          className="BackButton"
          onClick={() => {
            history.goBack();
          }}
        >
          Back
        </Button>
      </div>
    </div>
  );
}

export { MovieDetail };
