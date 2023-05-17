import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  margin: ${props => props.theme.spacing(7)} auto
    ${props => props.theme.spacing(0)};
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(5)};

  background-color: ${props => props.theme.colors.bgdBtn};
  border: none;
  outline: transparent;
  border-radius: ${props => props.theme.spacing(1)};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));

  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.icons};

  transition-property: background-color, color;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.btnHover};
    color: ${props => props.theme.colors.iconsHover};
  }
`;
