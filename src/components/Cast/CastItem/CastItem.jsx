import PropTypes from 'prop-types';
import unknownPerson from 'images/unknown-person.jpeg';
import {
  ActorItem,
  ActorName,
  CastImg,
  Character,
  CharacterWrap,
} from './CastItem.styled';

// щоб заразервувати місце для картинки, дод. width={'135'} height={'225'}
export const CastItem = ({ url, name, character }) => {
  return (
    <ActorItem>
      <CastImg
        src={url ? `https://image.tmdb.org/t/p/w200/${url}` : unknownPerson}
        alt={name}
      />
      <ActorName>{name}</ActorName>
      <Character>
        <CharacterWrap>Character:</CharacterWrap> {character}
      </Character>
    </ActorItem>
  );
};

CastItem.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};
