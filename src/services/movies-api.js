import axios from 'axios';

// https://api.themoviedb.org/3/movie/550?api_key=e744dd987f832ad945563dbad49387aa

const API_KEY = 'e744dd987f832ad945563dbad49387aa';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getMovies = async (page = 1) => {
  const res = await axios.get(
    `/trending/movie/week?api_key=${API_KEY}&page=${page}`
  );
  console.log(res.data.results);
  return res.data.results;
};

// Реалізація на fetch
const BASE_URL = '';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('The movie not found'));
}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(`${BASE_URL}/trending/get-trending`);
}

export function fetchByQuery() {
  return fetchWithErrorHandling(`${BASE_URL}/search/search-movies`);
}

// datails, credits, reviews
export function fetchMoviesDetails() {}
