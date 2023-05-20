import styled from 'styled-components';

export const Header = styled.header`
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(0)};

  background-color: ${props => props.theme.colors.bgdAccent};
`;

export const Main = styled.main`
  flex: 1;
`;

export const Footer = styled.footer`
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(0)};
  flex-shrink: 0;

  text-align: center;
  font-weight: 500;
  color: ${props => props.theme.colors.text};

  background-color: ${props => props.theme.colors.bgdAccent};
`;

export const SectionWrapper = styled.section`
  padding: ${props => props.theme.spacing(6)} ${props => props.theme.spacing(0)};
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: ${props => props.theme.spacing(0)} ${props => props.theme.spacing(4)};
`;

export const MainTitle = styled.h1`
  margin-bottom: ${props => props.theme.spacing(5)};

  font-size: 30px;
  text-align: center;
  color: ${props => props.theme.colors.text};
`;

export const SectionTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing(4)};

  font-size: 24px;
  text-align: center;
  color: ${props => props.theme.colors.text};
`;
