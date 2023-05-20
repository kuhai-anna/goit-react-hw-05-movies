import PropTypes from 'prop-types';
import { Genres } from './GenresList.styled';

export const GenresList = ({ genres }) => {
  return (
    <Genres>
      {genres.map(({ id, name }, index) => (
        <li key={id}>
          {name}
          {index !== genres.length - 1 && ' |'}
        </li>
      ))}
    </Genres>
  );
};

GenresList.propTypes = {
  genres: PropTypes.array,
  id: PropTypes.number,
  name: PropTypes.string,
};
