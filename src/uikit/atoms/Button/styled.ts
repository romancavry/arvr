import { styled } from '@linaria/react';

import { COLOR, TEXT, TRANSITION } from 'uikit/vars';

export const VARIANTS = {
  primary: 'primary',
  outline: 'outline',
  ghost: 'ghost',
};

export const Content = styled.div`
  margin: 0 auto;
  padding: 16px 40px 17px;

  &:empty {
    display: none;
  }
`;

export const Wrapper = styled.button`
  position: relative;

  overflow: hidden;

  box-sizing: border-box;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  line-height: normal;

  border: none;
  background: transparent;
  border-radius: 10px;
  outline: none;

  cursor: pointer;

  transition: var(${TRANSITION.MAIN});

  ${TEXT.MAIN};

  &:disabled {
    cursor: not-allowed;
  }

  &:active {
    transition: none;
  }

  &[data-variant='${VARIANTS.primary}'] {
    color: var(${COLOR.WHITE});
    background: var(${COLOR.ACCENT});
    border: none;
    transition: var(${TRANSITION.MAIN});

    &:hover,
    &:focus {
      opacity: 0.7;
    }

    &:active {
      background: var(${COLOR.MAIN});
    }

    &:disabled {
      background: var(${COLOR.ACCENT_LIGHT});
      opacity: 1;
    }
  }

  &[data-variant='${VARIANTS.outline}'] {
    background: transparent;
    color: var(${COLOR.MAIN});
    border: 1px solid var(${COLOR.MAIN});

    ${Content} {
      padding: 10px 40px;
    }

    &:hover,
    &:focus {
      opacity: 0.7;
    }

    &:active {
      color: var(${COLOR.ACCENT});
      border-color: var(${COLOR.ACCENT});
    }

    &:disabled {
      color: var(${COLOR.PALE});
      border-color: var(${COLOR.PALE});
    }
  }

  &[data-variant='${VARIANTS.ghost}'] {
    justify-content: center;

    background: transparent;
    color: var(${COLOR.MAIN});

    ${Content} {
      margin: 0;
      padding: 0;
    }

    &:hover,
    &:focus {
      opacity: 0.7;
    }

    &:active {
      color: var(${COLOR.PALE});
    }

    &:disabled {
      color: var(${COLOR.PALE});
    }
  }
`;

export const Loader = styled.div`
  position: absolute;

  display: none;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  &[data-show] {
    display: flex;
  }
`;
