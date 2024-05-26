import { styled } from '@linaria/react';

export const Wrap = styled.div`
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
`;

export const Footer = styled.footer`
  margin-top: 30px;
`;
