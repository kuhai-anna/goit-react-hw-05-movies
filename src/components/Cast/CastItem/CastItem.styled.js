import styled from 'styled-components';

export const ActorItem = styled.li`
  min-width: 140px;
`;

export const CastImg = styled.img`
  position: relative;
  margin-bottom: ${props => props.theme.spacing(3)};

  border-radius: ${props => props.theme.spacing(1)};

  object-fit: cover;
`;

export const ActorName = styled.p`
  margin-bottom: ${props => props.theme.spacing(1)};

  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.theme.colors.textAccent};
`;

export const Character = styled.p`
  max-width: 200px;

  font-size: 14px;
`;

export const CharacterWrap = styled.span`
  font-weight: 700;
  text-transform: uppercase;
`;
