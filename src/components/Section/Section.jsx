// import PropTypes from 'prop-types';

import { Container, SectionWrapper } from './Section.styled';

export const Section = ({ children }) => {
  return (
    <SectionWrapper>
      <Container>{children}</Container>
    </SectionWrapper>
  );
};

// Section.propTypes = {
//   children: PropTypes.any.isRequired,
// };
