import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GalleryItem = styled.li`
  border-radius: ${props => props.theme.spacing(1)};
`;

export const MovieLink = styled(NavLink)`
  /* display: block; */
  width: 100%;
  height: 200px;
  min-height: 200px;
  object-fit: cover;
  border-radius: ${props => props.theme.spacing(1)};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  transform: scale(1);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  /* додати & ???? */
  :hover,
  :focus {
    transform: scale(1.02);
  }
`;
