import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = 'c87cc88294da77d4343c2f6d8278b44b';

const fetchTrendingMovies = async (page, signal) => {
  const { data } = await axios.get('/trending/all/day', {
    params: { api_key: `${KEY}`, page },
    signal,
  });
  return data;
};

const fetchMoviesWithQuery = async (searchQuery, page, signal) => {
  const { data } = await axios.get('/search/movie', {
    params: {
      api_key: `${KEY}`,
      language: 'en-US',
      query: `${searchQuery}`,
      include_adult: 'false',
      page,
    },
    signal,
  });
  return data;
};

const fetchMovieDetails = async (moviId, signal) => {
  const { data } = await axios.get(`/movie/${moviId}`, {
    params: { api_key: `${KEY}`, language: 'en-US' },
    signal,
  });
  return data;
};

const fetchMovieCredits = async (moviId, signal) => {
  const { data } = await axios.get(`movie/${moviId}/credits`, {
    params: { api_key: `${KEY}`, language: 'en-US' },
    signal,
  });
  return data;
};

const fetchMovieReviews = async (moviId, page, signal) => {
  const { data } = await axios.get(`movie/${moviId}/reviews`, {
    params: { api_key: `${KEY}`, language: 'en-US', page },
    signal,
  });
  return data;
};

export const api = {
  fetchTrendingMovies,
  fetchMoviesWithQuery,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
};
