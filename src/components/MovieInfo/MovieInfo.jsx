import PropTypes from 'prop-types';
import { GenresList } from 'components/GenresList/GenresList';
import poster from 'images/frame-neon.jpeg';
import {
  Genres,
  InfoWrap,
  MovieContainer,
  MoviePoster,
  MovieScore,
  MovieTitle,
  Overview,
  OverviewText,
} from './MovieInfo.styled';

export const MovieInfo = ({ movie }) => {
  const {
    poster_path: url,
    title,
    name,
    vote_average: vote,
    overview,
    genres,
    release_date: date,
  } = movie;
  const movieTitle = `${title || name} (${Number.parseInt(date)})`;
  const userScore = `${Math.round(vote * 10)} %`;

  return (
    <MovieContainer>
      <MoviePoster
        src={url ? `https://image.tmdb.org/t/p/w500/${url}` : poster}
        alt={title}
        width={'288'}
        height={'432'}
      />
      <InfoWrap>
        <MovieTitle>{movieTitle}</MovieTitle>
        <MovieScore>User Score: {`${userScore}`}</MovieScore>
        <Overview>Overview</Overview>
        <OverviewText>
          {overview ? `${overview}` : 'This movie has no reviews.'}
        </OverviewText>
        <Genres>Genres</Genres>
        <GenresList genres={genres} />
      </InfoWrap>
    </MovieContainer>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    vote: PropTypes.number,
    overview: PropTypes.string,
    date: PropTypes.string,
  }),
};
