import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'services/movies-api';

const Reviews = id => {
  // console.log('Render Review');
  const { movieId } = useParams();
  // console.log(movieId);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetchMoviesReviews(movieId);
        console.log(res);
        setReviews(res);
      } catch (error) {
        setError(error);
      }
    };
    fetchReviews();
    // fetchMoviesReviews(movieId).then(res => {
    //   console.log(res);
    //   setReviews(res);
    // });
  }, [movieId]);

  // useEffect(() => {
  //   const fetchReviews = movieId => {
  //     fetchMoviesReviews(movieId)
  //       .then(res => {
  //         console.log(res);
  //         setReviews(res);
  //       })
  //       .catch(error => {
  //         setError('Ooops. Something went wrong...');
  //         console.log(error);
  //       });
  //   };
  //   fetchReviews();
  // }, [movieId]);

  // console.log(reviews);
  return (
    <>
      {error && <div>{error}</div>}
      <ul>
        {reviews.map(review => {
          console.log(review);
          return (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
      {/* {reviews} */}
    </>
  );
};

export default Reviews;
