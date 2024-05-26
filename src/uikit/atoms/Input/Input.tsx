import * as React from 'react';

import useCombinedRefs from 'uikit/utils/hooks/useCombinedRefs';

import {
  InputWrapper,
  GroupControl,
  InputControl as Control,
  Label,
  RightActions,
} from './styled';

const TYPES = {
  text: 'text',
  textarea: 'textarea',
};

export interface InputProps {
  value?: string | number;
  name?: string;
  label?: string;
  className?: string;
  helperText?: string;
  placeholder?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  noRightStopPropagation?: boolean;
  error?: boolean | string;
  type?: keyof typeof TYPES | string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent) => void;
  // eslint-disable-next-line no-unused-vars
  onFocus?: (e: React.FocusEvent) => void;
  // eslint-disable-next-line no-unused-vars
  onBlur?: (e: React.FocusEvent) => void;
  renderLeftActions?: () => React.ReactNode;
  renderAction?: () => React.ReactNode;
  inputActionStyle?: React.CSSProperties;
  mask?: string;
  maskChar?: string;
  savePlaceholderChars?: boolean;
  readOnly?: boolean;
  onClick?: () => void;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  containerProps?: Record<string, unknown>;
}

const Input = React.forwardRef<HTMLElement, InputProps>(
  (
    {
      name,
      error,
      label,
      helperText,
      className,
      type = 'text',
      onChange,
      renderAction,
      disabled,
      renderLeftActions,
      inputActionStyle,
      onFocus,
      onBlur,
      noRightStopPropagation,
      autoFocus,
      mask,
      maskChar,
      savePlaceholderChars,
      readOnly,
      value,
      containerProps = {},
      ...rest
    },
    ref,
  ) => {
    const defaultRef = React.useRef();
    const [hasValue, setHasValue] = React.useState(false);
    const [focused, setFocused] = React.useState(false);

    const combinedRef = useCombinedRefs(ref, defaultRef);

    const handleFocus = React.useCallback(
      (e: React.FocusEvent) => {
        setFocused(true);

        if (onFocus) {
          onFocus(e);
        }
      },
      [onFocus],
    );

    const handleBlur = React.useCallback(
      (e: React.FocusEvent) => {
        setFocused(false);

        if (onBlur) {
          onBlur(e);
        }
      },
      [onBlur],
    );

    const onChangeInput = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
          onChange(e);
        }

        if (!hasValue || !e.target.value) {
          setHasValue(!!`${e.target.value}`);
        }
      },
      [onChange, hasValue],
    );

    const textarea = type === TYPES.textarea;

    let componentAs;

    const onWrapperClick = React.useCallback(() => {
      if (combinedRef?.current && !readOnly) {
        combinedRef.current.focus();
      }
    }, [readOnly, combinedRef]);

    return (
      <InputWrapper
        className={className}
        data-textarea={textarea ? true : undefined}
        {...containerProps}
      >
        {label && <Label>{label}</Label>}

        <GroupControl
          onClick={onWrapperClick}
          data-focused={focused ? true : undefined}
          data-error={error ? true : undefined}
          data-disabled={disabled ? true : undefined}
          data-textarea={textarea ? true : undefined}
        >
          {renderLeftActions && renderLeftActions()}

          <Control
            id={name}
            onBlur={handleBlur}
            onFocus={handleFocus}
            {...rest}
            as={componentAs || undefined}
            className={className}
            disabled={disabled}
            name={name}
            onChange={onChangeInput}
            data-error={error ? true : undefined}
            type={type}
            value={value}
            ref={combinedRef}
            autoComplete='off'
            autoFocus={autoFocus}
            readOnly={readOnly}
          />

          <RightActions
            style={inputActionStyle}
            onClick={e => {
              if (!noRightStopPropagation) {
                e.stopPropagation();
              }
            }}
          >
            {renderAction && renderAction()}
          </RightActions>
        </GroupControl>
      </InputWrapper>
    );
  },
);

export default Input;
