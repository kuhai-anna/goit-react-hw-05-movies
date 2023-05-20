import PropTypes from 'prop-types';

import {
  Container,
  SectionWrapper,
  MainTitle,
  SectionTitle,
  Header,
  Footer,
  Main,
} from './Section.styled';

export const Section = ({ tag, mainTitle, title, children }) => {
  let sectionContent;

  switch (tag) {
    case 'header':
      sectionContent = (
        <Header>
          <Container>{children}</Container>
        </Header>
      );
      break;
    case 'main':
      sectionContent = <Main>{children}</Main>;
      break;
    case 'footer':
      sectionContent = (
        <Footer>
          <Container>{children}</Container>
        </Footer>
      );
      break;
    default:
      sectionContent = (
        <SectionWrapper>
          <Container>
            {mainTitle ? (
              <MainTitle>{mainTitle}</MainTitle>
            ) : (
              <SectionTitle>{title}</SectionTitle>
            )}
            {children}
          </Container>
        </SectionWrapper>
      );
      break;
  }

  return sectionContent;
};

Section.propTypes = {
  tag: PropTypes.string,
  mainTitle: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.any.isRequired,
};
