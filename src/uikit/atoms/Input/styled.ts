import { styled } from '@linaria/react';

import { COLOR, TEXT } from 'uikit/vars';

export const InputWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  padding-bottom: 0;

  color: var(${COLOR.MAIN});

  &[data-textarea] {
    min-width: 208px;
  }
`;

export const Label = styled.label`
  overflow: hidden;
  display: block;

  margin-bottom: 5px;
  width: 100%;

  ${TEXT.MEDIUM};
  color: var(${COLOR.MAIN});
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const controlStyle = `
  flex-grow: 1;
  padding: 12px 15px;
  width: 100%;

  border: none;
  
  ${TEXT.MEDIUM};
  color: inherit;
  
  background: inherit;
  cursor: inherit;
  transition: border-color 0.2s ease;

  &:disabled {
    background: blue;

    &::placeholder {
      color: purple;
    }
  }
  
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 32px var(${COLOR.WHITE}) inset !important;
    -webkit-text-fill-color: inherit !important;
  }
`;

const inputHover = `
  border-color: var(${COLOR.ACCENT});
  background: var(${COLOR.WHITE});
  cursor: text;
`;

export const GroupControl = styled.div`
  position: relative;

  overflow: hidden;
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 32px;

  border: 1px solid var(${COLOR.PALE});
  border-radius: 5px;

  transition: 0.2s ease-in-out;
  transition-property: border, background;

  &:hover,
  &:focus {
    ${inputHover};
  }

  &[data-focused] {
    ${inputHover};
  }

  &[data-error] {
    border-color: var(${COLOR.ERROR});
  }

  &[data-disabled] {
    cursor: not-allowed;

    color: purple;

    background: blue;
    border-color: blue;
    box-shadow: none;
  }
`;

export const InputControl = styled.input`
  ${controlStyle};
`;

export const RightActions = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;

  height: 100%;
  margin-left: auto;
`;
