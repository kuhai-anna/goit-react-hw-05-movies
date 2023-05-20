import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GalleryItem = styled.li`
  border-radius: ${props => props.theme.spacing(1)};
`;

export const MovieLink = styled(NavLink)`
  display: block;
  /* width: 100%; */
  max-width: 320px;
  border-radius: ${props => props.theme.spacing(1)};

  text-decoration: none;
  color: ${props => props.theme.colors.text};

  background-color: #191919;

  transform: scale(1);
  transition: transform, background-color,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.02);
    box-shadow: 0px 0px 13px 0px #dfdfdf;
  }
`;

export const MovieWrap = styled.div`
  width: 100%;
  display: block;
`;

export const Poster = styled.img`
  /* width: 100%; */
  width: 320px;
  height: 480px;

  border-top-left-radius: ${props => props.theme.spacing(1)};
  border-top-right-radius: ${props => props.theme.spacing(1)};

  object-fit: cover;
`;

export const MovieName = styled.h3`
  display: block;
  padding: ${props => props.theme.spacing(2)};
  height: 56px;
`;
