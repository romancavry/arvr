const FONTS = {
  OPEN_SANS: 'Open Sans',
};

const PRIMARY_FONT = `
  font-family: ${FONTS.OPEN_SANS};
`;

const H1 = `
  ${PRIMARY_FONT};
  font-weight: 500;
  font-size: 36px;
  line-height: 52px;
`;

const H2 = `
  ${PRIMARY_FONT};
  font-weight: 500;
  font-size: 30px;
  line-height: 42px;
`;

const H3 = `
  ${PRIMARY_FONT};
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
`;

const H4 = `
  ${PRIMARY_FONT};
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
`;

const MAIN = `
  ${PRIMARY_FONT};
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

const MEDIUM = `
  ${PRIMARY_FONT};
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
`;

const SMALL = `
  ${PRIMARY_FONT};
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
`;

const MAIN_BOLD = `
  ${MAIN};
  font-weight: 600;
`;

export default {
  H1,
  H2,
  H3,
  H4,

  MAIN,
  MAIN_BOLD,

  MEDIUM,

  SMALL,

  PRIMARY_FONT,
};
