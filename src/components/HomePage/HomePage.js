// import SearchBar from 'components/MoviesPage/MoviesPage';
import MovieList from 'components/TrendingMovies/MovieList';
import { useEffect, useState } from 'react';
import { getMovies } from 'services/movies-api';

export default function GetTrendingMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page] = useState(1);
  // const [query, setQuery] = useState('');

  // const onLoadBtnClick = () => {
  //   setPage(prevPage => prevPage + 1);
  // };

  useEffect(() => {
    setLoading(true);
    const fetchTrendingMovies = () => {
      getMovies(page)
        .then(results => {
          setMovies(prevState => [...prevState, ...results]);
        })
        .catch(error => {
          setError('Ooops. Something went wrong...');
          console.log(error);
        })
        .finally(() => setLoading(false));
    };
    fetchTrendingMovies();
  }, [page]);

  // const handleFormSubmit = () => {
  //   setQuery(query);
  //   setPage(1);
  //   setMovies([0]);
  // };
  return (
    <>
      <h1>Trending Movies</h1>
      {/* <SearchBar onSubmit={handleFormSubmit} /> */}
      {error && <div>{error}</div>}
      {movies && <MovieList movies={movies} />}
      {loading && 'Loading ...'}
    </>
  );
}
