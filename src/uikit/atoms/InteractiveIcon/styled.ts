import { styled } from '@linaria/react';

import { COLOR, TRANSITION, HELPER } from 'uikit/vars';

export const SIZES = {
  m: 40,
  s: 24,
  xs: 15,
};

export const VARIANTS = {
  default: 'default',
  danger: 'danger',
  accent: 'accent',
};

const NORMAL = `
  color: var(${COLOR.MAIN});

  &:hover, &:focus {
    opacity: 0.7;
  }

  &:active {
    color: var(${COLOR.BLACK});
  }

  &:disabled {
    color: var(${COLOR.PALE});
  }
`;

const DANGER = `
  color: var(${COLOR.ERROR});

  &:hover, &:focus {
    opacity: 0.5;
  }

  &:active {
    opacity: 1;

    color: var(${COLOR.ACCENT});
  }

  &:disabled {
    color: var(${COLOR.PALE});
  }
`;

const ACCENT = `
  color: var(${COLOR.ACCENT});

  &:disabled {
    color: var(${COLOR.PALE});
  }
`;

export const IconContainer = styled.button<{ size: keyof typeof SIZES }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${p => SIZES[p.size]}px;
  height: ${p => SIZES[p.size]}px;

  border: none;
  background: transparent;
  cursor: ${p => (p.disabled ? 'default' : 'pointer')};
  transition: var(${TRANSITION.MAIN});

  ${HELPER.WITHOUT_OUTLINE};

  &[data-variant='${VARIANTS.default}'] {
    ${NORMAL};
  }

  &[data-variant='${VARIANTS.danger}'] {
    ${DANGER};
  }

  &[data-variant='${VARIANTS.accent}'] {
    ${ACCENT};
  }

  svg {
    flex-shrink: 0;

    fill: currentColor;
  }

  &[data-size] {
    svg {
      max-width: ${p => SIZES[p.size]}px;
      max-height: ${p => SIZES[p.size]}px;
    }
  }
`;

export const WrapperForTooltip = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
