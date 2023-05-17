import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Status } from 'constants/status';
import { api } from 'services/movie-api';
import { Loader } from 'components/Loader/Loader';
import { ReviewsItem } from './ReviewsItem/ReviewsItem';

// We don`t have any reviews for this movie

const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState({});
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    async function getMovieDetails() {
      setStatus(Status.PENDING);
      try {
        const data = await api.fetchMovieReviews(movieId);
        setReviews(data);

        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(Status.REJECTED);
      }
    }

    getMovieDetails();
  }, [movieId]);

  // рендер компонентів в залежності від статусу
  if (status === Status.PENDING) {
    return <Loader />;
  }

  if (status === Status.REJECTED) {
    return <p>{`Whoops, something went wrong. ${error.message}`}</p>;
  }

  if (status === Status.RESOLVED) {
    const { id, results } = reviews;

    return (
      <>
        {results.length === 0 ? (
          <p>We don`t have any reviews for this movie</p>
        ) : (
          <ul>
            {results.map(({ author, content }) => (
              <ReviewsItem key={id} author={author} content={content} />
            ))}
          </ul>
        )}
      </>
    );
  }
};

Review.propTypes = {
  id: PropTypes.number,
};

export default Review;
