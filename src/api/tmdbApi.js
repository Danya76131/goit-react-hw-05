import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDVhZTFlZWY0MjYyNGY3MzkzNDY0ZjMxZmU3ZWNlMSIsIm5iZiI6MTc0OTYzNTE3Ny40OTgsInN1YiI6IjY4NDk1MDY5MGFiMzcxOTM1MzNlMDhkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OkAQ212k41fSdlx2tyUmI3euo5uFAynESihK0-Mum_s",
  },
};

export const getTrendingMovies = () =>
  axios.get(`${BASE_URL}/trending/movie/day`, options);

export const searchMovies = (query) =>
  axios.get(`${BASE_URL}/search/movie`, {
    ...options,
    params: { query },
  });

export const getMovieDetails = (id) =>
  axios.get(`${BASE_URL}/movie/${id}`, options);

export const getMovieCredits = (id) =>
  axios.get(`${BASE_URL}/movie/${id}/credits`, options);

export const getMovieReviews = (id) =>
  axios.get(`${BASE_URL}/movie/${id}/reviews`, options);
