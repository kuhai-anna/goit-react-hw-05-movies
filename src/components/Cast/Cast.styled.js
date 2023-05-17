import styled from 'styled-components';
import { Gallery } from 'components/MovieGallery/MovieGallery.styled';

export const CastGallery = styled(Gallery)`
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
`;
