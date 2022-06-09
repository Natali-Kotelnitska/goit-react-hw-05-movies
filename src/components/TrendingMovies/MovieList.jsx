import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

const MovieList = ({ movies }) => {
  // const { movieId } = useParams();

  console.log(movies);
  return (
    <ul>
      {/* {movies.map(({ id, original_title }) => ( */}
      {movies.map(({ id, original_title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} className="">
            <h2>{original_title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
