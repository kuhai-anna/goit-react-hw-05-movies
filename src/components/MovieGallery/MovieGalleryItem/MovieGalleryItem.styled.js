import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GalleryItem = styled.li``;

export const MovieLink = styled(NavLink)`
  display: block;
  max-width: 320px;
  border-radius: ${props => props.theme.spacing(1)};

  text-decoration: none;
  color: ${props => props.theme.colors.text};

  background-color: transparent;

  transform: scale(1);
  transition: transform, background-color,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    transform: scale(1.01);
    box-shadow: 0px 0px 12px 3px rgba(255, 184, 224, 0.56);
  }
`;

export const MovieWrap = styled.div`
  width: 100%;
  display: block;
`;

export const Poster = styled.img`
  /* width: 100%; */
  position: relative;
  width: 320px;
  height: 480px;

  border-radius: ${props => props.theme.spacing(1)};

  object-fit: cover;
`;

export const NameWrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: end;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transition: transform(-50%, -50%);

  border-radius: ${props => props.theme.spacing(1)};
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 63.48%,
    rgba(0, 0, 0, 0.9) 92.16%
  );
`;

export const MovieName = styled.h3`
  padding: ${props => props.theme.spacing(5)};
  font-size: 16px;
  text-transform: uppercase;
`;
