import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../api/tmdbApi";
import MovieList from "../../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then((res) => setMovies(res.data.results))
      .catch(console.error);
  }, []);

  return <MovieList movies={movies} />;
}
