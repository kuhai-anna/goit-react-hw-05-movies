import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  GalleryItem,
  MovieLink,
  MovieName,
  MovieWrap,
  Poster,
} from './MovieGalleryItem.styled';
import poster from 'images/frame-neon.jpeg';

export const MovieGalleryItem = ({ movieId, title, name, url }) => {
  const location = useLocation();
  let movieTitle =
    title && title.length > 50 ? `${title.slice(0, 50)}...` : title;
  let movieName = name && name.length > 50 ? `${name.slice(0, 50)}...` : name;

  return (
    <GalleryItem>
      <MovieLink to={`/movies/${movieId}`} state={{ from: location }}>
        <MovieWrap>
          <Poster
            src={url ? `https://image.tmdb.org/t/p/w500/${url}` : poster}
            alt={title}
          />
          <MovieName>{movieTitle || movieName}</MovieName>
        </MovieWrap>
      </MovieLink>
    </GalleryItem>
  );
};

MovieGalleryItem.propTypes = {
  movieId: PropTypes.number.isRequired,
  title: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
};
