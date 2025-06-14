import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../api/tmdbApi";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query)
      searchMovies(query)
        .then((res) => setMovies(res.data.results))
        .catch(console.error);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query: e.target.elements.query.value });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="query" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
