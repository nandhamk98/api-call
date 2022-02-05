import "./App.css";
import { useParams } from "react-router-dom";

function MovieDetail(props) {
  const { id } = useParams();
  const movie = props.movielist[id];
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
    </div>
  );
}

export { MovieDetail };
