import styled from 'styled-components';
import { StyledLink } from 'components/BackLink/BackLink.styled';

export const LinkList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing(3)};
`;

export const AdditionalInfoLink = styled(StyledLink)`
  margin-top: ${props => props.theme.spacing(6)};

  &.active {
    background-color: ${props => props.theme.colors.btnHover};
  }
`;
