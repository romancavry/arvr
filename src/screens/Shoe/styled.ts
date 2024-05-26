import { styled } from '@linaria/react';

import { COLOR, TEXT } from 'uikit/vars';

export const Wrap = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 50px;

  .picker {
    position: absolute !important;
    top: 74px;
    left: 70px;

    width: 90px !important;
    height: 90px !important;
  }

  h1 {
    position: absolute;
    top: 43px;
    left: 140px;

    margin: 40px;
    padding: 0;

    ${TEXT.H1};
    color: var(${COLOR.MAIN});
  }
`;

export const Footer = styled.footer`
  margin-top: 30px;
`;
