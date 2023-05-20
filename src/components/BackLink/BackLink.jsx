import PropTypes from 'prop-types';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { StyledLink } from './BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <AiOutlineDoubleLeft size="18" />
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
};
