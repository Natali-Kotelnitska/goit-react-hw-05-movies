import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieList = ({ movies, prevLocation }) => {
  // const location = useLocation();
  // console.log(location.pathname);
  return (
    <>
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: prevLocation }}>
              {/* <Link to={`/movies/${id}`} state={{ from: location.pathname }}> */}
              <h3>{original_title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

MovieList.propTypes = {
  // prevLocation: PropTypes.object.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default MovieList;
