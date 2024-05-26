import { Annot } from './types';

export const getDataPosition = (annot: Annot) =>
  `${annot.position.x} ${annot.position.y} ${annot.position.z}`;

export const getDataNormal = (annot: Annot) =>
  `${annot.normal.x} ${annot.normal.y} ${annot.normal.z}`;
