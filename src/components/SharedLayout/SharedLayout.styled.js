import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AppWraper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav``;

export const Link = styled(NavLink)`
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  color: ${props => props.theme.colors.text};

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-right: ${props => props.theme.spacing(3)};
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.textAccent};
  }
`;
