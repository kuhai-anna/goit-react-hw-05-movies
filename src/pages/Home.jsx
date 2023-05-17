import { useEffect, useState } from 'react';
import { Section } from 'components/Section/Section';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { Status } from 'constants/status';
import { api } from 'services/movie-api';
import { Loader } from 'components/Loader/Loader';
import { MovieGalleryErrorView } from 'components/MovieGallery/MovieGalleryErrorView/MovieGalleryErrorView';
import { Button } from 'components/Button/Button';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const notLastPage = page < Math.ceil(totalPages / 20);

  useEffect(() => {
    async function getTrandingMovies() {
      setStatus(Status.PENDING);
      try {
        const { results, total_pages } = await api.fetchTrendingMovies(page);

        page === 1
          ? setMovies(results)
          : setMovies(prevState => [...prevState, ...results]);

        setTotalPages(total_pages);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(Status.REJECTED);
      }
    }

    getTrandingMovies();
  }, [page]);

  // збільшення номеру сторінки при кліку на кнопку
  const loadMoreBtnClick = () => {
    setPage(prevState => prevState + 1);
  };

  // рендер компонентів в залежності від статусу
  if (status === Status.PENDING) {
    return <Loader />;
  }

  if (status === Status.REJECTED) {
    return (
      <MovieGalleryErrorView
        message={`Whoops, something went wrong. ${error.message}`}
      />
    );
  }

  if (status === Status.RESOLVED) {
    return (
      <Section mainTitle={'Tranding today'}>
        <MovieGallery movies={movies} />
        {notLastPage && <Button onClick={loadMoreBtnClick} />}
      </Section>
    );
  }
};

export default Home;
