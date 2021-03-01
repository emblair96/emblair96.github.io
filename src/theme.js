import { createMuiTheme } from '@material-ui/core';


const theme = createMuiTheme({
	typography: {
    fontFamily: [
      'Inconsolata',
      'monospace'
    ].join(','),
		"fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  },
});

const theme2 = createMuiTheme({
	typography: {
    fontFamily: [
      'Poppins',
      'sans-serif'
    ].join(','),
		"fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  },
});

export {theme, theme2}