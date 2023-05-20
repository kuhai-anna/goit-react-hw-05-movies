import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing(3)};
`;

export const MoviePoster = styled.img`
  width: 320px;
  border-radius: ${props => props.theme.spacing(1)};
`;

export const InfoWrap = styled.div`
  min-width: 288px;
  max-width: calc(100vw - 364px);
`;

export const MovieTitle = styled.h1`
  margin-bottom: ${props => props.theme.spacing(3)};

  font-size: 30px;
  color: ${props => props.theme.colors.textAccent};
`;

export const MovieScore = styled.p`
  margin-bottom: ${props => props.theme.spacing(6)};
`;

export const Overview = styled.h2`
  margin-bottom: ${props => props.theme.spacing(3)};

  font-size: 20px;
  color: ${props => props.theme.colors.textAccent};
`;

export const OverviewText = styled.p`
  margin-bottom: ${props => props.theme.spacing(6)};
`;

export const Genres = styled(Overview)``;
