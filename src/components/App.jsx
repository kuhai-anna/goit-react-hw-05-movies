import Home from 'pages/Home';
import Movies from 'pages/Movies';
import { Routes, Route, NavLink } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route path="movies/:movieId" element={<div>Movie details</div>}>
            <Route path="cast" element={<div>Cast</div>} />
            <Route path="reviews" element={<div>Reviews</div>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
