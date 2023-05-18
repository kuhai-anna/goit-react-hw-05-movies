import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'c87cc88294da77d4343c2f6d8278b44b';

const fetchTrendingMovies = async page => {
  const searchParams = new URLSearchParams({
    api_key: `${KEY}`,
    page: `${page}`,
  });

  const { data } = await axios.get(
    `${BASE_URL}trending/all/day?${searchParams}`
  );
  return data;
};

const fetchMoviesWithQuery = async (searchQuery, page) => {
  const searchParams = new URLSearchParams({
    api_key: `${KEY}`,
    language: 'en-US',
    query: `${searchQuery}`,
    include_adult: 'false',
    page: `${page}`,
  });

  const { data } = await axios.get(`${BASE_URL}search/movie?${searchParams}`);
  return data;
};

const fetchMovieDetails = async moviId => {
  const searchParams = new URLSearchParams({
    api_key: `${KEY}`,
    language: 'en-US',
  });

  const { data } = await axios.get(
    `${BASE_URL}movie/${moviId}?${searchParams}`
  );
  return data;
};

const fetchMovieCredits = async moviId => {
  const searchParams = new URLSearchParams({
    api_key: `${KEY}`,
    language: 'en-US',
  });

  const { data } = await axios.get(
    `${BASE_URL}movie/${moviId}/credits?${searchParams}`
  );
  return data;
};

const fetchMovieReviews = async (moviId, page) => {
  const searchParams = new URLSearchParams({
    api_key: `${KEY}`,
    language: 'en-US',
    page: `${page}`,
  });

  const { data } = await axios.get(
    `${BASE_URL}movie/${moviId}/reviews?${searchParams}`
  );
  return data;
};

export const api = {
  fetchTrendingMovies,
  fetchMoviesWithQuery,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
};
