import { red, blue, yellow, green } from '@material-ui/core/colors';

const white = '#FFFFFF';
const black = '#000000';

export default {
  type: 'light',
  common: {
    black,
    white,
    commonBackground: '#F4F6F8',
    contrastText: black,
    neutral: '#E0E0E0',
    muted: '#9E9E9E',
  },
  default: {
    light: 'rgba(33, 150, 243, 0.1)',
    main: '#212121',
    dark: '#121212',
    logoBg: '#1E1E1E',
    border: 'rgba(0, 0, 0, 0.1)',
    contrastText: white,
  },
  primary: {
    contrastText: white,
    main: '#1976D2',
    light: '#63A4FF',
    dark: '#004BA0',
  },
  secondary: {
    contrastText: white,
    main: '#9C27B0',
    light: '#D05CE3',
    dark: '#6A0080',
  },
  success: {
    light: green[300],
    main: green[500],
    dark: green[700],
    contrastText: white,
  },
  info: {
    light: blue[300],
    main: blue[500],
    dark: blue[700],
    contrastText: white,
  },
  warning: {
    light: yellow[300],
    main: yellow[700],
    dark: '#FFA000',
    contrastText: black,
  },
  error: {
    light: red[300],
    main: red[500],
    dark: red[700],
    contrastText: white,
  },
  background: {
    default: 'rgb(95, 59, 145)',
    paper: white,
  },
  text: {
    primary: '#212121',
    secondary: '#757575',
    link: '#1976D2',
  },
};
