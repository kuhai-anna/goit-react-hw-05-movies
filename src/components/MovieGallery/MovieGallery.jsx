import PropTypes from 'prop-types';
import { Gallery } from './MovieGallery.styled';
import { MovieGalleryItem } from './MovieGalleryItem/MovieGalleryItem';

export const MovieGallery = ({ movies }) => {
  return (
    <Gallery>
      {movies.map(movie => (
        <MovieGalleryItem key={movie} movie={movie} />
      ))}
    </Gallery>
  );
};

MovieGallery.propTypes = {
  movies: PropTypes.array.isRequired,
};
