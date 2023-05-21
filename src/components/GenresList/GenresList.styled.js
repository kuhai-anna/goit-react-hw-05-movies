import styled from 'styled-components';

export const Genres = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing(1)};
`;
