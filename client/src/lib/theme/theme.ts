import { createTheme, extendTheme } from '@mui/material/styles';
import getMPTheme from './getMPTheme';

const lightTheme = createTheme(getMPTheme('light'));
const darkTheme = createTheme(getMPTheme('dark'));

const theme = {
  light: lightTheme,
  ...(import.meta.env.DEV && { dark: darkTheme }),
};

// const theme = extendTheme({
//   // colorSchemes: {
//   //   light: {
//   //     palette: lightTheme.palette,
//   //   },
//   //   dark: {
//   //     palette: darkTheme.palette,
//   //   },
//   // },
//   // 공통 테마 속성 (타이포그래피, 컴포넌트 등)
//   // typography: lightTheme.typography,
//   // components: lightTheme.components,
//   // 기타 공통 설정들
// });

export default theme;
