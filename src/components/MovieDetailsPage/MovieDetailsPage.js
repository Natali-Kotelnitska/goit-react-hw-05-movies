// import Container from 'components/Container/Container';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesDetails } from 'services/movies-api';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  console.log(movieId);

  useEffect(() => {
    fetchMoviesDetails(movieId).then(res => {
      console.log(res);
      setMovie(res);
    });
  }, [movieId]);

  const getYear = () => new Date(movie.release_date).getFullYear();

  return (
    <>
      <h2>Movie Review</h2>

      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt="movie.title"
          />
          <h3>{movie.title}</h3>
          <p>({getYear()})</p>
          <p>User Score: {movie.popularity}</p>
          <div className="movie_overview">
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
          <div>
            <p>Genres</p>
            {/* <p>{movie.genres}</p> */}
          </div>
        </div>
      )}
    </>
  );
}
