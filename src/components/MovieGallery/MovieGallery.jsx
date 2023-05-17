import PropTypes from 'prop-types';
import { Gallery } from './MovieGallery.styled';
import { MovieGalleryItem } from './MovieGalleryItem/MovieGalleryItem';

export const MovieGallery = ({ movies }) => {
  return (
    <Gallery>
      {movies.map(({ id, title, poster_path, name }) => (
        <MovieGalleryItem
          key={id}
          movieId={id}
          title={title}
          name={name}
          url={poster_path}
        />
      ))}
    </Gallery>
  );
};

MovieGallery.propTypes = {
  movies: PropTypes.array.isRequired,
  id: PropTypes.number, //видає помилку, коли isRequired
};
