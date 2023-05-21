import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Status } from 'constants/status';
import { api } from 'services/movie-api';
import { Section } from 'components/Section/Section';
import { Loader } from 'components/Loader/Loader';
import { MovieGalleryErrorView } from 'components/MovieGallery/MovieGalleryErrorView/MovieGalleryErrorView';
import { BackLink } from 'components/BackLink/BackLink';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { TextLink } from 'components/BackLink/BackLink.styled';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

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
        message={`Whoops, something went wrong. ${error.message}. Please try again later.`}
      />
    );
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <Section>
          <BackLink to={backLinkHref}>
            <TextLink>Back</TextLink>
          </BackLink>
          <MovieInfo movie={movie} />
        </Section>
        <Section title={'Additional information'}>
          <AdditionalInfo />
          <Outlet />
        </Section>
      </>
    );
  }
};

export default MovieDetails;
