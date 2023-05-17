import { Section } from 'components/Section/Section';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Status } from 'constants/status';
import { api } from 'services/movie-api';
import { Loader } from 'components/Loader/Loader';
import { MovieGalleryErrorView } from 'components/MovieGallery/MovieGalleryErrorView/MovieGalleryErrorView';
import { GenresList } from 'components/GenresList/GenresList';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    async function getMovieDetails() {
      setStatus(Status.PENDING);
      try {
        const data = await api.fetchMovieDetails(movieId);
        setMovie(data);

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
    return (
      <MovieGalleryErrorView
        message={`Whoops, something went wrong. ${error.message}`}
      />
    );
  }

  if (status === Status.RESOLVED) {
    const {
      poster_path: url,
      title,
      name,
      vote_average: vote,
      overview,
      genres,
      release_date: date,
    } = movie;

    const movieTitle = `${title || name} (${Number.parseInt(date)})`;
    const userScore = `${vote * 10} %`;

    return (
      <>
        <Section>
          <img src={`https://image.tmdb.org/t/p/w500/${url}`} alt={title} />
          <h1>{movieTitle}</h1>
          <span>{`User Score: ${userScore}`}</span>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <GenresList genres={genres} />
        </Section>
        <Section>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </Section>
      </>
    );
  }
};

MovieDetails.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string,
  vote: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.array,
  date: PropTypes.string,
};

export default MovieDetails;
