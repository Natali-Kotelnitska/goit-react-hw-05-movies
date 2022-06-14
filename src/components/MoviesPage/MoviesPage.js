import Container from 'components/Container/Container';
import MovieList from 'components/TrendingMovies/MovieList';
import { useEffect, useState } from 'react';
import { fetchByQuery } from 'services/movies-api';
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState('');

  // const normalizedQuery = () =>
  //   searchQuery.toLowerCase().trim().split(' ').join('+');

  const handleQuerySearch = e => {
    // console.log(e.target.value);
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      // setSearchQuery('');
      alert('Enter the film title');
    }

    setSearchQuery('');
  };

  useEffect(() => {
    // setLoading(true);
    if (!searchQuery) return;
    setMovies([]);
    const fetchMovie = () => {
      setLoading(true);
      fetchByQuery(searchQuery)
        .then(results => {
          // setMovies(results);
          setMovies(prevState => [...prevState, ...results]);
        })
        .catch(error => {
          setError('Ooops. Something went wrong...');
          console.log(error);
        })
        .finally(() => setLoading(false));
    };
    fetchMovie();
  }, [searchQuery]);

  return (
    <>
      <Container>
        <h1>Movies search</h1>

        {loading && 'Loading ...'}
        {error && <div>{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchQuery"
            value={searchQuery}
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={handleQuerySearch}
          />
          <button type="submit">Search</button>
        </form>
        {movies && <MovieList movies={movies} />}
      </Container>
      {/* <h1>Movies search</h1>

      {loading && 'Loading ...'}
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchQuery"
          value={searchQuery}
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleQuerySearch}
        />
        <button type="submit">Search</button>
      </form>
      {movies && <MovieList movies={movies} />} */}
    </>
  );
};

export default SearchBar;
