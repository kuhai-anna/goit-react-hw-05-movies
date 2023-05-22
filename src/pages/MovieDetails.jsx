import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Status } from 'constants/status';
import { api } from 'services/movie-api';
import { TextLink } from 'components/BackLink/BackLink.styled';
import { Section } from 'components/Section/Section';
import { Loader } from 'components/Loader/Loader';
import { MovieGalleryErrorView } from 'components/MovieGallery/MovieGalleryErrorView/MovieGalleryErrorView';
import { BackLink } from 'components/BackLink/BackLink';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { Suspense } from 'react';
import { useRef } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const location = useLocation();
  const backLinLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    // переривання http-запиту
    const abortController = new AbortController();
    const signal = abortController.signal;

    async function getMovieDetails() {
      setStatus(Status.PENDING);
      try {
        const data = await api.fetchMovieDetails(movieId, signal);
        setMovie(data);
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
  }, [movieId]);

  // рендер компонентів в залежності від статусу
  if (status === Status.PENDING) {
    return <Loader />;
  }

  if (status === Status.REJECTED) {
    return (
      <MovieGalleryErrorView
        message={`Whoops, something went wrong. ${error.message}. Please try again later.`}
      />
    );
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <Section>
          <BackLink to={backLinLocationRef.current}>
            <TextLink>Back</TextLink>
          </BackLink>
          <MovieInfo movie={movie} />
        </Section>
        <Section title={'Additional information'}>
          <AdditionalInfo />
          <Suspense fallback={<Loader size={'10vh'} />}>
            <Outlet />
          </Suspense>
        </Section>
      </>
    );
  }
};

export default MovieDetails;
