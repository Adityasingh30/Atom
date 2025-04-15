import { red, blue, lightBlue, yellow, green } from '@material-ui/core/colors';

const white = '#FFF';
const black = '#000';

export default {
  type: 'light',
  common: {
    black,
    white,
    commonBackground: 'rgb(245, 245, 245)',  // Lighter, soft background
    contrastText: black,  // Darker contrast text for better readability
    neutral: '#B0B5BC',  // Softer neutral color
    muted: '#9E9E9E',  // Light muted color
  },
  default: {
    light: 'rgba(41, 150, 243, .1)',  // Soft, light primary
    main: 'rgb(95, 59, 145)',  // A modern deep blue
    dark: 'rgb(95, 59, 145)',  // Modern dark blue
    logoBg: 'rgb(51, 51, 51)',  // Darker logo background
    border: 'rgba(0, 40, 73, .1)',  // Subtle border
    contrastText: white,
  },
  primary: {
    light: lightBlue[200],  // Lighter and pastel blue
    main: lightBlue[400],  // Soft but vibrant blue
    dark: lightBlue[600],  // A deeper blue for contrast
    contrastText: white,
  },
  success: {
    light: green[200],  // Soft light green
    main: green[400],  // Fresh and lively green
    dark: green[600],  // Dark green for contrast
    contrastText: white,
  },
  info: {
    light: blue[200],  // Lighter, fresh blue
    main: blue[400],  // Clear, calming blue
    dark: blue[600],  // Deeper blue for contrast
    contrastText: white,
  },
  warning: {
    light: yellow[200],  // Soft, pastel yellow
    main: yellow[400],  // Bright yellow but not too intense
    dark: yellow[600],  // Richer yellow for contrast
    contrastText: black,  // Darker text for readability
  },
  danger: {
    light: red[200],  // Lighter, muted red
    main: red[400],  // Softer red
    dark: red[600],  // Darker red for emphasis
    contrastText: white,
  },
  background: {
    paper: 'rgb(203, 217, 226)', // Clean white for paper
    default: 'rgb(95, 59, 145)',  // Very light gray background for a modern feel
    dark: 'rgb(95, 59, 145)',  // Light gray for dark mode
  },
  border: '#E0E0E0',  // Lighter border for a soft look
  divider: '#E0E0E0',  // Subtle divider
  oxfordBlue: 'rgba(15, 45, 75, 1)',  // Modern, soft dark blue
  prussianBlue: 'rgba(35, 85, 145, 1)',  // Lighter shade of prussian blue
  darkCerulean: 'rgb(29, 87, 130)',  // Softer cerulean tone
  pewterBlue: 'rgba(177, 196, 219, 1)',  // Light, calming blue-gray
  isabelline: 'rgba(245, 245, 245, 1)',  // Very light off-white for a modern touch
};
