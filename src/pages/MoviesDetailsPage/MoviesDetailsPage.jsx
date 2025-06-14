import { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { getMovieDetails } from "../../api/tmdbApi";

const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId)
      .then((res) => setMovie(res.data))
      .catch(console.error);
  }, [movieId]);

  const goBack = () => navigate(location.state?.from || "/movies");

  if (!movie) return <div>Loading...</div>;

  const { title, overview, poster_path } = movie;

  return (
    <div>
      <button onClick={goBack}>Go Back</button>

      <h1>{title}</h1>
      {poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={`${title} poster`}
        />
      ) : (
        <p>No poster available</p>
      )}
      <p>{overview}</p>

      <h3>Additional Information</h3>
      <ul>
        <li>
          <Link to="cast" state={location.state}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={location.state}>
            Reviews
          </Link>
        </li>
      </ul>

      {}
      <Outlet />
    </div>
  );
};

export default MoviesDetailsPage;
