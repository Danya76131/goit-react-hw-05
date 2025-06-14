import { useEffect, useState } from "react";
import { getMovieReviews } from "../../api/tmdbApi";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then((res) => setReviews(res.data.results));
  }, [movieId]);

  return (
    <ul>
      {reviews.length ? (
        reviews.map((review) => (
          <li key={review.id}>
            <p>
              <b>{review.author}:</b> {review.content}
            </p>
          </li>
        ))
      ) : (
        <p>No reviews yet.</p>
      )}
    </ul>
  );
};

export default MovieReviews;
