import PropTypes from 'prop-types';
import { GalleryItem, MovieLink } from './MovieGalleryItem.styled';

export const MovieGalleryItem = ({ movieId, title, name, url }) => {
  return (
    <GalleryItem>
      <MovieLink to={`/movies/${movieId}`}>
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${url}`} alt={title} />
          <h3>{title || name}</h3>
        </div>
      </MovieLink>
    </GalleryItem>
  );
};

// змінити
MovieGalleryItem.propTypes = {
  movieId: PropTypes.number.isRequired,
  title: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
};
