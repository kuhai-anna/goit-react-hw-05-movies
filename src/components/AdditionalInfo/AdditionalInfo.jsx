import { AdditionalInfoLink, LinkList } from './AdditionalInfo.styled';

export const AdditionalInfo = () => {
  return (
    <LinkList>
      <li>
        <AdditionalInfoLink to="cast">
          <span>Cast</span>
        </AdditionalInfoLink>
      </li>
      <li>
        <AdditionalInfoLink to="reviews">Reviews</AdditionalInfoLink>
      </li>
    </LinkList>
  );
};
