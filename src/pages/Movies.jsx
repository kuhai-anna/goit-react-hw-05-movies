import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { MovieGalleryErrorView } from 'components/MovieGallery/MovieGalleryErrorView/MovieGalleryErrorView';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Section } from 'components/Section/Section';
import { Status } from 'constants/status';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { api } from 'services/movie-api';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const notLastPage = page < Math.ceil(totalPages / 20);

  // переробити
  const updateQueryString = params => {
    const nextParams = params.query !== '' ? { query: params.query } : {};
    setSearchParams(nextParams);
    setPage(params.page);
  };

  useEffect(() => {
    if (!searchQuery) {
      // перший рендер - це порожній рядок, не робимо http-запит
      return;
    }

    async function getMovieWithQuery() {
      setStatus(Status.PENDING);
      try {
        const { results, total_pages } = await api.fetchMoviesWithQuery(
          searchQuery,
          page
        );

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

    getMovieWithQuery();
  }, [searchQuery, page]);

  // збільшення номеру сторінки при кліку на кнопку
  const loadMoreBtnClick = () => {
    setPage(prevState => prevState + 1);
  };

  // рендер компонентів в залежності від статусу
  if (status === Status.IDLE) {
    return (
      <Section>
        <SearchForm onSubmit={updateQueryString} />
      </Section>
    );
  }

  if (status === Status.PENDING) {
    return (
      <Section>
        <SearchForm onSubmit={updateQueryString} />
        <Loader />;
      </Section>
    );
  }

  if (status === Status.REJECTED) {
    return (
      <Section>
        <SearchForm onSubmit={updateQueryString} />
        <MovieGalleryErrorView
          message={`Whoops, something went wrong. ${error.message}. Please try again later.`}
        />
      </Section>
    );
  }

  if (status === Status.RESOLVED) {
    return (
      <Section>
        <SearchForm onSubmit={updateQueryString} />
        <MovieGallery movies={movies} />
        {notLastPage && <Button onClick={loadMoreBtnClick} />}
      </Section>
    );
  }
};

export default Movies;
