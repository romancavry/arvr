import { styled } from '@linaria/react';

import { COLOR, TEXT } from 'uikit/vars';

import InteractiveIcon from '../InteractiveIcon/InteractiveIcon';

export const VARIANTS = {
  success: 'success',
  alert: 'alert',
  error: 'error',
};

export const Wrapper = styled.div`
  display: flex;
  width: 300px;
  margin: 0;
  padding: 16px;
  border-radius: 4px;
  color: var(${COLOR.PALE});

  &[data-variant='${VARIANTS.success}'] {
    background: var(${COLOR.SUCCESS});
  }

  &[data-variant='${VARIANTS.alert}'] {
    background: var(${COLOR.ALERT});
  }

  &[data-variant='${VARIANTS.error}'] {
    background: var(${COLOR.ERROR});
  }
`;

export const CloseIcon = styled(InteractiveIcon)`
  margin-left: auto;
  cursor: pointer;
  align-self: flex-start;
  background: none !important;
  border: none !important;

  svg {
    fill: var(${COLOR.WHITE});

    &:hover,
    &:focus {
      opacity: 0.7;
    }
  }
`;

export const Text = styled.div`
  margin-right: 8px;
  color: var(${COLOR.WHITE});
`;

export const Title = styled.div`
  ${TEXT.MAIN};
  word-break: break-word;
  color: var(${COLOR.WHITE});
`;

export const Msg = styled.div`
  margin-top: 8px;

  ${TEXT.MAIN};
`;
