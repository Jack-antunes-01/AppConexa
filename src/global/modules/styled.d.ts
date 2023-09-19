import 'styled-components';
import themes from '../themes/index';

type ThemeType = typeof themes;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeType {}
}
