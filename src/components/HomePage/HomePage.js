// import SearchBar from 'components/MoviesPage/MoviesPage';
import Container from 'components/Container/Container';
import PageHeading from 'components/Pageheading/Pageheading';
import MovieList from 'components/TrendingMovies/MovieList';
import { useEffect, useState } from 'react';
import { getMovies } from 'services/movies-api';
import NotFoundView from 'ui/NotFoundView';

export default function GetTrendingMovies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [query, setQuery] = useState('');

  // const onLoadBtnClick = () => {
  //   setPage(prevPage => prevPage + 1);
  // };

  useEffect(() => {
    const fetchTrendingMovies = () => {
      setLoading(true);
      getMovies()
        .then(results => {
          setMovies(results);
          // setMovies(prevState => [...prevState, ...results]);
        })
        .catch(error => {
          setError('Ooops. Something went wrong...');
          console.log(error);
        })
        .finally(() => setLoading(false));
    };
    fetchTrendingMovies();
  }, []);

  // const handleFormSubmit = () => {
  //   setQuery(query);
  //   setPage(1);
  //   setMovies([0]);
  // };
  const isNotFound = !loading && !movies.length;
  return (
    <>
      <Container>
        <PageHeading text={'Trending Movies'}></PageHeading>
        {/* <SearchBar onSubmit={handleFormSubmit} /> */}
        {loading && 'Loading ...'}
        {isNotFound && <NotFoundView />}
        {error && <div>{error}</div>}
        {movies && <MovieList movies={movies} />}
      </Container>
    </>
  );
}
