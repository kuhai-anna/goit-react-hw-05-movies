import styled from 'styled-components';

export const Button = styled.button`
  margin: 0 auto;
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(3)};

  width: 48px;
  height: 36px;
  outline: none;
  border: none;
  border-radius: ${props => props.theme.spacing(1)};
  background-color: ${props => props.theme.colors.bgdBtn};

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
