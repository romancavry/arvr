import { styled } from '@linaria/react';

import { COLOR, MEDIA, TEXT } from 'uikit/vars';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;

  background: var(${COLOR.ACCENT_LIGHT});

  @media (min-width: ${MEDIA.DESKTOP_1}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Text = styled.p`
  ${TEXT.MAIN};
  color: var(${COLOR.BLACK});
`;
