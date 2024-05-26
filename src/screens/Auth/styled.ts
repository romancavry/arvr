import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { COLOR, TEXT } from 'uikit/vars';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  background: var(${COLOR.ACCENT});
`;

export const TypeWrapper = styled.div`
  padding: 20px;
  min-width: 350px;

  background: var(${COLOR.WHITE});
  border-radius: 15px;
`;

export const Title = styled.p`
  margin-bottom: 30px;
  ${TEXT.H2};
  color: var(${COLOR.MAIN});
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;

export const submitButtonStyle = css`
  margin-bottom: 10px;
  width: 100%;
`;

export const Text = styled.p`
  ${TEXT.SMALL};
  color: var(${COLOR.MAIN});
  text-align: center;

  button {
    ${TEXT.SMALL};
    color: var(${COLOR.ACCENT}) !important;
  }
`;
