const { useParams } = require('react-router');

const Cast = () => {
  const { movieId } = useParams();

  return <div>Cast of {`${movieId}`}</div>;
};

export default Cast;
