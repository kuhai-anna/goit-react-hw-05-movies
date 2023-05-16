import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  // const { movieId } = useParams();

  return (
    <>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
