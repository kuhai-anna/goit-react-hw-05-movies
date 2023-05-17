import PropTypes from 'prop-types';

export const ReviewsItem = ({ author, content }) => {
  <li>
    <p>Author: {author}</p>
    <p>'{content}'</p>
  </li>;
};

ReviewsItem.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};
