import styled from 'styled-components';

export const CastGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 32px);
  grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
  grid-gap: 16px;
  margin-top: ${props => props.theme.spacing(7)};
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const AlertMessage = styled.p`
  padding: ${props => props.theme.spacing(6)} ${props => props.theme.spacing(0)};
  text-align: center;
`;
