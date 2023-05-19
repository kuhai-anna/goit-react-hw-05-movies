import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineDoubleLeft } from 'react-icons/ai';

export const BackLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <AiOutlineDoubleLeft size="16" />
      {children}
    </Link>
  );
};

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
};
