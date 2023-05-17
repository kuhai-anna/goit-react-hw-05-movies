import PropTypes from 'prop-types';

export const GenresList = ({ genres }) => {
  return (
    <ul>
      {genres.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.array,
  id: PropTypes.number,
  name: PropTypes.string,
};
