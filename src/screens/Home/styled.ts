import { styled } from '@linaria/react';

import { COLOR, TEXT } from 'uikit/vars';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const Title = styled.h1`
  height: fit-content;

  ${TEXT.H1};
  color: var(${COLOR.MAIN});
`;
