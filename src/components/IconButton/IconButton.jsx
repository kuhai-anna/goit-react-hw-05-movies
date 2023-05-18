import PropTypes from 'prop-types';
import { Button } from './IconButton.styled';

export const IconButton = ({ children, onClick, ...allyProps }) => (
  <Button type="button" onClick={onClick} {...allyProps}>
    {children}
  </Button>
);

IconButton.defoultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
