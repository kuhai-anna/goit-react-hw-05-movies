import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  const loaderParams = {
    color: '#00616ef4',
    width: '100px',
    ariaLabel: 'three-dots-loading',
  };

  const loaderWrapperStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '83.6vh',
  };
  return (
    <ThreeDots
      {...loaderParams}
      wrapperStyle={loaderWrapperStyle}
      visible={true}
    />
  );
};
