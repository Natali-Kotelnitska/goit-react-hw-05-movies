import axios from 'axios';

// https://api.themoviedb.org/3/movie/550?api_key=e744dd987f832ad945563dbad49387aa

const API_KEY = 'e744dd987f832ad945563dbad49387aa';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const END_POINTS = {
  trending: '/trending/movie/week',
  querySearch: '/search/movie',
  movieDetails: '/movie',
  movieCredits: '/credits',
  movieReviews: '/reviews',
};

export const getMovies = async (page = 1) => {
  const res = await axios.get(
    `${END_POINTS.trending}?api_key=${API_KEY}&page=${page}&language=en-US&include_adult=false`
    // `/trending/movie/week?api_key=${API_KEY}&page=${page}`
  );
  console.log(res.data.results);
  return res.data.results;
};

//  https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
export const fetchByQuery = async (query, page = 1) => {
  const res = await axios.get(
    `${END_POINTS.querySearch}?api_key=${API_KEY}&page=${page}&query=${query}&language=en-US&include_adult=false`
  );
  console.log(res.data.results);
  return res.data.results;
};

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
export const fetchMoviesDetails = async id => {
  // console.log(id);
  const res = await axios.get(
    `${END_POINTS.movieDetails}/${id}?api_key=${API_KEY}&language=en-US`
  );
  // console.log(res.data.results);
  // console.log(res.data);
  return res.data;
};

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
export const fetchMoviesCredits = async id => {
  const res = await axios.get(
    `/movie/${id}${END_POINTS.movieCredits}?api_key=${API_KEY}&language=en-US`
  );
  console.log(res.data.results);
  return res.data.results;
};

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
export const fetchMoviesReviews = async (id, page = 1) => {
  const res = await axios.get(
    `/movie/${id}${END_POINTS.movieReviews}?api_key=${API_KEY}&language=en-US&page=${page}`
  );
  console.log(res.data.results);
  return res.data.results;
};

// export const normalizeQuery = query =>
//   query.toLowerCase().trim().split(' ').join('+');

// export const normalizeMovieDetails = data => ({
//   ...data,
//   poster_path: data.poster_path
//     ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
//     : notFoundImageurl,
// });
// Реалізація на fetch
// const BASE_URL = '';

// async function fetchWithErrorHandling(url = '', config = {}) {
//   const response = await fetch(url, config);
//   return response.ok
//     ? await response.json()
//     : Promise.reject(new Error('The movie not found'));
// }

// export function fetchTrendingMovies() {
//   return fetchWithErrorHandling(`${BASE_URL}/trending/get-trending`);
// }

// export function fetchByQuery() {
//   return fetchWithErrorHandling(`${BASE_URL}/search/search-movies`);
// }

// datails, credits, reviews
// export function fetchMoviesDetails() {}
