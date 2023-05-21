import { SectionTitle } from 'components/Section/Section.styled';
import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing(3)};
  margin-top: ${props => props.theme.spacing(5)};
`;

export const MoviePoster = styled.img`
  width: 288px;
  border-radius: ${props => props.theme.spacing(1)};
`;

export const InfoWrap = styled.div`
  min-width: 288px;
  max-width: calc(100vw - 332px);
`;

export const MovieTitle = styled.h1`
  margin-bottom: ${props => props.theme.spacing(3)};

  font-size: 30px;
  color: ${props => props.theme.colors.textAccent};
`;

export const MovieScore = styled.p`
  margin-bottom: ${props => props.theme.spacing(6)};
`;

export const Overview = styled(SectionTitle)`
  margin-bottom: ${props => props.theme.spacing(3)};

  text-align: start;
`;

export const OverviewText = styled.p`
  margin-bottom: ${props => props.theme.spacing(6)};
`;

export const Genres = styled(Overview)``;
