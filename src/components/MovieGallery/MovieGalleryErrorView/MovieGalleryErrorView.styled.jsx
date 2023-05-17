import styled from 'styled-components';
import errorImage from 'images/sad-danbo-optim.jpeg';

export const ErrorBox = styled.div`
  width: 100%;
  height: 83.6vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.392), rgba(0, 0, 0, 0.392)),
    url(${errorImage});
  background-repeat: no-repeat;
  background-position: start;
  background-size: cover;
`;

export const ErrorText = styled.p`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${props => props.theme.spacing(0)} ${props => props.theme.spacing(3)};

  text-align: center;
  font-size: 36px;
  color: ${props => props.theme.colors.text};
`;
