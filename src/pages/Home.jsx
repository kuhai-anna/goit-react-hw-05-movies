import { Link } from 'react-router-dom';

const Home = () => {
  const movies = ['batman', 'duna', 'spiderman'];

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie}>
          <Link to={`/movies/${movie}`}>{movie}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
