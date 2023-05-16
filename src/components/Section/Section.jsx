import PropTypes from 'prop-types';

import {
  Container,
  SectionWrapper,
  MainTitle,
  SectionTitle,
} from './Section.styled';

export const Section = ({ tag, mainTitle, title, children }) => {
  let sectionContent;

  switch (tag) {
    case 'header':
      sectionContent = <header>{children}</header>;
      break;
    case 'main':
      sectionContent = <main>{children}</main>;
      break;
    case 'footer':
      sectionContent = <footer>{children}</footer>;
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
