import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-content: center;
  margin-bottom: ${props => props.theme.spacing(5)};
  ${props => props.theme.spacing(0)};
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(4)};
  min-width: 98px;

  background-color: ${props => props.theme.colors.bgdBtn};
  border: none;
  outline: transparent;
  border-radius: ${props => props.theme.spacing(1)};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));

  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  color: ${props => props.theme.colors.text};

  transition-property: background-color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.btnHover};
  }
`;

export const TextLink = styled.span`
  margin-left: ${props => props.theme.spacing(1)};
`;
