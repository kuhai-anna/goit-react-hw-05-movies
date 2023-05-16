import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav``;

export const Link = styled(NavLink)`
  text-decoration: none;

  &:not(:last-child) {
    margin-right: ${props => props.theme.spacing(3)};
  }
`;
