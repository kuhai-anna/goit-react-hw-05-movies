import PropTypes from 'prop-types';
import unknownPerson from 'images/unknown-neon.jpeg';

export const CastItem = ({ url, name, character }) => {
  return (
    <li>
      <img
        src={url ? `https://image.tmdb.org/t/p/w200/${url}` : unknownPerson}
        alt={name}
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  );
};

CastItem.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};
