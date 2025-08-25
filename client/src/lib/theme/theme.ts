import { AppTheme } from 'node_modules/@toolpad/core/esm/AppProvider/AppProvider';
import { createTheme } from '@mui/material/styles';
import getMPTheme from './getMPTheme';

const lightTheme = createTheme(getMPTheme('light'));
const darkTheme = createTheme(getMPTheme('dark'));

const appTheme: AppTheme = {
  light: lightTheme,
  dark: darkTheme,
};

export default appTheme;
