import PropTypes from 'prop-types';
import {
  AuthorName,
  Review,
  ReviewAuthorImg,
  ReviewWrap,
} from './ReviewsItem.styled';
import unknownPerson from 'images/unknown-person.jpeg';

export const ReviewsItem = ({ author, content }) => {
  return (
    <Review>
      <ReviewWrap>
        <ReviewAuthorImg
          src={unknownPerson}
          alt={`Author: ${author}`}
          width={'60px'}
        />
        <p>
          <AuthorName>Author: </AuthorName>
          {author}
        </p>
      </ReviewWrap>
      <p>'{content}'</p>
    </Review>
  );
};

ReviewsItem.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};
