import styled from 'styled-components';

export const SectionWrapper = styled.section`
  padding: ${props => props.theme.spacing(6)} ${props => props.theme.spacing(0)};
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: ${props => props.theme.spacing(0)} ${props => props.theme.spacing(4)};
`;
