import * as React from 'react';

import { Close } from 'assets/icons/40';

import { Wrapper, Text, Title, Msg, CloseIcon, VARIANTS } from './styled';

export interface SnackbarProps {
  title: string;
  msg?: React.ReactNode;
  variant?: keyof typeof VARIANTS;
  closeToast?: () => void;
  className?: string;
}

const Snackbar: React.FC<SnackbarProps> = ({
  title,
  msg,
  variant = VARIANTS.error,
  closeToast,
  className,
  ...rest
}) => {
  const onClose = () => {
    if (closeToast) {
      closeToast();
    }
  };

  return (
    <Wrapper data-variant={variant} className={className} {...rest}>
      <Text>
        <Title>{title}</Title>

        {msg && <Msg>{msg}</Msg>}
      </Text>

      <CloseIcon onClick={onClose} icon={Close} />
    </Wrapper>
  );
};

export default Snackbar;
