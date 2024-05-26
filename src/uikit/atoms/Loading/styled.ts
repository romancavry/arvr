import { styled } from '@linaria/react';

import { COLOR } from 'uikit/vars';

export const Container = styled.div<{ size: number }>`
  position: relative;
  z-index: 100;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  min-height: ${p => p.size}px;

  background: transparent;

  &[data-blocker] {
    position: absolute;
    background: rgba(var(${COLOR.BG}), 0.8);
  }
`;

export const Text = styled.p`
  color: var(${COLOR.MAIN});
`;

export const Circular = styled.svg<{ size: number }>`
  transform: rotate(-90deg);

  width: ${p => p.size}px;
  height: ${p => p.size}px;

  fill: none;
  stroke-linecap: round;
  stroke-width: 4;
`;

export const Circle = styled.circle`
  transform-origin: center;

  opacity: 0.9;

  stroke: var(${COLOR.ACCENT});
  stroke-dasharray: 312;
  stroke-dashoffset: 0;

  animation: circleRotate 1.7s linear infinite;

  &[data-inverse-color] {
    stroke: var(${COLOR.WHITE});
  }

  @keyframes circleRotate {
    0% {
      transform: rotate(70deg);
      stroke-dashoffset: 312;
    }
    60% {
      stroke-dashoffset: -312;
    }
    100% {
      transform: rotate(450deg);
      stroke-dashoffset: -312;
    }
  }
`;
