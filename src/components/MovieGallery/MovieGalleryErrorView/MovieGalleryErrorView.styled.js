import styled from 'styled-components';

export const ErrorText = styled.p`
  padding: ${props => props.theme.spacing(15)}
    ${props => props.theme.spacing(2)};
  text-align: center;
  font-size: 24px;
  color: ${props => props.theme.colors.text};

  @media screen and (min-width: 420px) {
    font-size: 28px;
  }
`;
