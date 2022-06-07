import MovieList from 'components/TrendingMovies/MovieList';
import { useEffect, useState } from 'react';
import { getMovies } from 'services/movies-api';

export default function GetTrendingMovies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMovies(page)
      .then(results => {
        setMovies(results);
      })
      .catch(error => console.log(error))
      .finally(() => console.log('Finally'));
  }, [page]);

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
}
