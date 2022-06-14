import { createTheme } from '@mui/material/styles';

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#c80000',
      dark: '#720000',
      light: '#a30000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8ca800',
      dark: '#748b00',
      light: '#596a00',
      contrastText: '#ffffff',
    },
    background: {
      paper: '#f3f3f3',
      default: '#333333',
    },
  },
  button: {
    background: '#720000',
  },
  typography: {
    allVariants: {
      color: '#720000',
    },
  },
});

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#000000',
      dark: '#3d3d3d',
      light: '#bcbcbc',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#262d00',
      dark: '#000000',
      light: '#31351d',
      contrastText: '#ffffff',
    },
    background: {
      paper: '#333333',
      default: '#333333',
    },
  },
  typography: {
    allVariants: {
      color: '#ebebeb',
    },
  },
});
