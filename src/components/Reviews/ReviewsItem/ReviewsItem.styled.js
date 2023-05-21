import styled from 'styled-components';

export const Review = styled.li`
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(4)};
    padding-bottom: ${props => props.theme.spacing(2)};

    border-bottom: 1px solid ${props => props.theme.colors.border};
  }
`;

export const ReviewWrap = styled.div`
  display: flex;
  align-items: end;
  gap: ${props => props.theme.spacing(3)};
  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const ReviewAuthorImg = styled.img`
  height: 60px;
  object-fit: cover;
`;

export const AuthorName = styled.span`
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.theme.colors.textAccent};
`;
