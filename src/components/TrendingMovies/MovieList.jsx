const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, original_title }) => (
        <li key={id}>
          <h2>{original_title}</h2>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
