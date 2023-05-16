const { useParams } = require('react-router');

// We don`t have any reviews for this movie

const Review = () => {
  const { movieId } = useParams();

  return <div>Review for the {`${movieId}`}</div>;
};

export default Review;
