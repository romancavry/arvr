import { mapProps } from 'recompose';
import type { FieldRenderProps } from 'react-final-form';

import { Input } from 'uikit/atoms';
import type { InputProps } from 'uikit/atoms/Input/Input';

type InputFieldType = FieldRenderProps<string, HTMLElement> & InputProps;

const enhance = mapProps((props: InputFieldType) => {
  const { input, meta, error: manualError, ...rest } = props;

  const {
    error: validationError,
    submitError,
    dirtySinceLastSubmit,
    touched,
    submitFailed,
    dirty,
  } = meta;

  const error =
    submitError && !dirtySinceLastSubmit ? submitError : validationError;

  return {
    ...rest,
    ...input,
    error: manualError || (dirty || (touched && submitFailed) ? error : null),
  };
});

// @ts-ignore
const InputControl = enhance(Input);

export default InputControl;
