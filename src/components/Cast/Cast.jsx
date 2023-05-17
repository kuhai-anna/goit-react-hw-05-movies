import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Status } from 'constants/status';
import { api } from 'services/movie-api';
import { Loader } from 'components/Loader/Loader';
import { CastGallery } from './Cast.styled';
import { CastItem } from './CastItem/CastItem';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    async function getMovieDetails() {
      setStatus(Status.PENDING);
      try {
        const { cast } = await api.fetchMovieCredits(movieId);
        setCast(cast);

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

  // додати картинку по замовчуванню
  if (status === Status.RESOLVED) {
    return (
      <>
        <CastGallery>
          {cast.map(({ id, character, name, profile_path: url }) => (
            <CastItem key={id} url={url} name={name} character={character} />
          ))}
        </CastGallery>
      </>
    );
  }
};

Cast.propTypes = {
  id: PropTypes.number,
};

export default Cast;
