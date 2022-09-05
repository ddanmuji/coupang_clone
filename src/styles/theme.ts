const calcRem = (size: number) => `${size / 16}rem`;

const fontSizes = {
  xs: calcRem(10),
  sm: calcRem(12),
  md: calcRem(14),
  lg: calcRem(16),
  xl: calcRem(18),
  xxl: calcRem(20),
} as const;

const colors = {
  gray_33: '#333',
  white: '#fff',
} as const;

const deviceSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  tabletL: '1024px',
  NoteBook: '1440px',
} as const;

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
  NoteBook: `only screen and (max-width: ${deviceSizes.NoteBook})`,
} as const;

const theme = {
  fontSizes,
  colors,
  deviceSizes,
  device,
};

export type Theme = typeof theme;
export default theme;
