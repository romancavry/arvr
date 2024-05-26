import * as React from 'react';

import { IconContainer, SIZES, VARIANTS } from './styled';

export interface InteractiveIconProps {
  size?: keyof typeof SIZES;
  tabIndex?: number;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  className?: string;
  variant?: keyof typeof VARIANTS;
}

const InteractiveIcon = React.forwardRef<
  HTMLButtonElement,
  InteractiveIconProps
>(
  (
    {
      onClick,
      onMouseDown,
      children,
      icon: Icon,
      size = 'm',
      className,
      variant = VARIANTS.default,
      ...rest
    },
    ref,
  ) => {
    const handleClick = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) {
          e.preventDefault();

          onClick(e);
        }
      },
      [onClick],
    );

    const handleMouseDown = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onMouseDown) {
          onMouseDown(e);
        }

        setTimeout(() => {
          // @ts-ignore
          const { current } = ref || {};

          if (current && current.blur && typeof current.blur === 'function') {
            current.blur();
          }
        }, 0);
      },
      [ref, onMouseDown],
    );

    return (
      <IconContainer
        type='button'
        {...rest}
        onClick={handleClick}
        onMouseDown={handleMouseDown}
        ref={ref}
        className={className}
        size={size}
        data-variant={variant}
      >
        {Icon ? <Icon /> : children}
      </IconContainer>
    );
  },
);

export default InteractiveIcon;
