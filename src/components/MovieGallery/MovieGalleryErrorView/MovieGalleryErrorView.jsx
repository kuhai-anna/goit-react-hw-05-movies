import PropTypes from 'prop-types';
import { ErrorText } from './MovieGalleryErrorView.styled';

export const MovieGalleryErrorView = ({ message }) => {
  return (
    <div role="alert">
      <ErrorText>{message}</ErrorText>
    </div>
  );
};

MovieGalleryErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};
