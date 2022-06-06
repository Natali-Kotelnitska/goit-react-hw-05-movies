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
