import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Status } from 'constants/status';
import { api } from 'services/movie-api';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { ReviewsItem } from './ReviewsItem/ReviewsItem';
import { AlertMessage } from './Reviews.styled';

const Review = () => {
  const { movieId } = useParams();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [reviews, setReviews] = useState({});
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const notLastPage = page < Math.ceil(totalPages / 20);

  useEffect(() => {
    async function getMovieDetails() {
      setStatus(Status.PENDING);
      try {
        const data = await api.fetchMovieReviews(movieId, page);
        setReviews(data);

        setTotalPages(data.total_pages);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(Status.REJECTED);
      }
    }

    getMovieDetails();
  }, [movieId, page]);

  // збільшення номеру сторінки при кліку на кнопку
  const loadMoreBtnClick = () => {
    setPage(prevState => prevState + 1);
  };

  // рендер компонентів в залежності від статусу
  if (status === Status.PENDING) {
    return <Loader />;
  }

  if (status === Status.REJECTED) {
    return (
      <p>{`Whoops, something went wrong. ${error.message}. Please try again later.`}</p>
    );
  }

  if (status === Status.RESOLVED) {
    const { id, results } = reviews;

    return (
      <>
        {results.length === 0 ? (
          <AlertMessage>There are no reviews for this movie.</AlertMessage>
        ) : (
          <ul>
            {results.map(({ author, content }) => (
              <ReviewsItem key={id} author={author} content={content} />
            ))}
          </ul>
        )}
        {notLastPage && <Button onClick={loadMoreBtnClick} />}
      </>
    );
  }
};

Review.propTypes = {
  id: PropTypes.number,
};

export default Review;
