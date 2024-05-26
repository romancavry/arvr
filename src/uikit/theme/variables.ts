import { css } from '@linaria/core';

import { TRANSITION, COLOR } from '../vars';

export default css`
  ${COLOR.ACCENT}: #00BCD4;
  ${COLOR.ACCENT_LIGHT}: #55CEF4;

  ${COLOR.MAIN}: #2E2A36;

  ${COLOR.BG}: #F8F9FA;
  ${COLOR.PALE}: #CFD8DC;
  ${COLOR.ERROR}: #F55252;
  ${COLOR.INFO}: #2094F0;
  ${COLOR.ALERT}: #FFC107;
  ${COLOR.SUCCESS}: #4AB34F;

  ${COLOR.WHITE}: #FFFFFF;
  ${COLOR.BLACK}: #000000;

  ${COLOR.GRADIENT_ACCENT}: linear-gradient(
    0deg,
    #FFFFFF 0%,
    #0d7473 100%
  );
  ${TRANSITION.MAIN}: 0.2s ease-in-out;
`;
