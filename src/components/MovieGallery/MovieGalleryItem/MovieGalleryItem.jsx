import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GalleryItem } from './MovieGalleryItem.styled';

export const MovieGalleryItem = ({ movie }) => {
  return (
    <GalleryItem>
      <Link to={`/movies/${movie}`}>{movie}</Link>
    </GalleryItem>
  );
};

// змінити
MovieGalleryItem.propTypes = {
  movie: PropTypes.any,
};
