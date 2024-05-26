import { styled } from '@linaria/react';

export const Wrap = styled.div`
  display: none;

  &[data-snap] {
    display: block;
  }
`;
