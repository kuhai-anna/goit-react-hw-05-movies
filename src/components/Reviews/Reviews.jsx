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
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const notLastPage = page < Math.ceil(totalPages / 20);

  useEffect(() => {
    // переривання http-запиту
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function getMovieDetails() {
      setStatus(Status.PENDING);
      try {
        const { results, total_pages } = await api.fetchMovieReviews(
          movieId,
          page,
          signal
        );
        setReviews(results);

        setTotalPages(total_pages);
        setStatus(Status.RESOLVED);
      } catch (error) {
        if (signal.aborted) {
          return; // не сповіщаємо користувача про переривання запиту
        } else {
          setError(error);
          setStatus(Status.REJECTED);
        }
      }
    }

    getMovieDetails();
    return () => {
      abortController.abort();
    };
  }, [movieId, page]);

  // збільшення номеру сторінки при кліку на кнопку
  const loadMoreBtnClick = () => {
    setPage(prevState => prevState + 1);
  };

  // рендер компонентів в залежності від статусу
  if (status === Status.PENDING) {
    return <Loader size={'10vh'} />;
  }

  if (status === Status.REJECTED) {
    return (
      <p>{`Whoops, something went wrong. ${error.message}. Please try again later.`}</p>
    );
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        {reviews.length === 0 ? (
          <AlertMessage>There are no reviews for this movie.</AlertMessage>
        ) : (
          <ul>
            {reviews.map(({ author, content, id }) => (
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
