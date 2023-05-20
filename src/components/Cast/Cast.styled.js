import styled from 'styled-components';
// import { Gallery } from 'components/MovieGallery/MovieGallery.styled';

export const CastGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 32px);
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
