import { PropTypes } from 'prop-types';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = ({ size }) => {
  const loaderWidth = size ? `${size}` : '75vh';

  const loaderParams = {
    color: '#ffccea',
    width: '100px',
    ariaLabel: 'three-dots-loading',
  };

  const loaderWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: `${loaderWidth}`,
  };
  return (
    <ThreeDots
      {...loaderParams}
      wrapperStyle={loaderWrapperStyle}
      visible={true}
    />
  );
};

Loader.propTypes = {
  size: PropTypes.string,
};
