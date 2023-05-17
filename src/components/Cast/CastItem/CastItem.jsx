import PropTypes from 'prop-types';

export const CastItem = ({ url, name, character }) => {
  return (
    <li>
      <img src={`https://image.tmdb.org/t/p/w200/${url}`} alt={name} />
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
