// import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const MovieList = ({ movies }) => {
  // const match = useMatch();
  // console.log(match);
  // const { movieId } = useParams();
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
      <hr />
    </>
  );
};

export default MovieList;
