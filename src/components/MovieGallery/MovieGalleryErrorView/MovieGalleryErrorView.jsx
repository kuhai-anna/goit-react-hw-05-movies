import PropTypes from 'prop-types';
import { ErrorBox, ErrorText } from './MovieGalleryErrorView.styled';

export const MovieGalleryErrorView = ({ message }) => {
  return (
    <ErrorBox role="alert">
      <ErrorText>{message}</ErrorText>
    </ErrorBox>
  );
};

MovieGalleryErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};
