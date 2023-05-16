import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  text-decoration: none;

  &:not(:last-child) {
    margin-right: ${props => props.theme.spacing(3)};
  }
`;
