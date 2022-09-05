import '@emotion/react';
import theme from './theme';

const { colors, device, deviceSizes, fontSizes } = theme;

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof colors;
    device: typeof device;
    deviceSizes: typeof deviceSizes;
    fontSizes: typeof fontSizes;
  }
}
