import * as React from 'react';

import useCombinedRefs from 'uikit/utils/hooks/useCombinedRefs';

import Loading from '../Loading/Loading';

import { Wrapper, Loader, Content, VARIANTS } from './styled';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof VARIANTS;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  children?: React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      variant = VARIANTS.primary,
      children,
      loading,
      disabled,
      className,
      ...rest
    },
    ref,
  ) => {
    const defaultRef = React.useRef();

    const combinedRef = useCombinedRefs(ref, defaultRef);

    const handleMouseLeave = () =>
      combinedRef.current?.blur && combinedRef.current.blur();

    return (
      <Wrapper
        type={type}
        ref={combinedRef}
        disabled={disabled || loading}
        data-variant={variant}
        className={className}
        onMouseDown={handleMouseLeave}
        {...rest}
      >
        <Content className='button__content'>{children}</Content>

        <Loader data-show={loading ? true : undefined}>
          <Loading size={28} />
        </Loader>
      </Wrapper>
    );
  },
);

export default Button;
