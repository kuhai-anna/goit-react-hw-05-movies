import { ThreeDots } from 'react-loader-spinner';
import { useLocation } from 'react-router-dom';

export const Loader = () => {
  const location = useLocation();
  const moviesPage = location.pathname === '/movies';
  const loaderWidth = moviesPage ? '55vh' : '75vh';

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
