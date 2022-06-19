import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <NavLink to={`/movies/${id}`} className="">
              <h3>{original_title}</h3>
            </NavLink>
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
