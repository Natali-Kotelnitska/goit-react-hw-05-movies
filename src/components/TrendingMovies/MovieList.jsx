import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location.pathname }}>
              {/* <Link to={`${id}`}> */}
              <h3>{original_title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
export default MovieList;
