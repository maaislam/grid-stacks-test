import { createMuiTheme } from '@material-ui/core/styles';

const theme = (mode) => {
  return createMuiTheme({
    palette: {
      type: mode,
      primary: {
        main: '#000000',
      },

      footer: {
        main: '#2A3B8F',
      },

      benefit: {
        main: '#F15A29',
      },
      inputColor: {
        main: mode === 'dark' ? '#161616' : '#dedede',
        text: mode === 'dark' ? '#fff' : '#000',
      },
      buttonColor: {
        main: '#FCFCFC',
        primary: '#2D3E8B',
        primaryLight: '#67709C',
      },
      background: {
        paper: mode === 'dark' ? '#101010' : '#F7F6FB',
      },
      grey: {
        700: '#83756E',
        A400: '#c7c7c7',
        A500: '#C1C1C1',
        A600: '#707070',
        A700: '#666666',
      },
    },

    typography: {
      fontFamily: ['Montserrat', 'Roboto'].join(','),
      h1: {
        fontSize: '4.2rem',
        fontWeight: '700',
        '@media (max-width:600px)': {
          fontSize: '3.2rem',
        },
      },
      h6: {
        fontSize: '1rem',
        '@media (max-width:960px)': {
          fontSize: '1.6rem',
        },
        fontWeight: '500',
      },
      h4: {
        fontSize: '2rem',
        '@media (max-width:960px)': {
          fontSize: '1.6rem',
        },
        '@media (max-width:600px)': {
          fontSize: '1.4rem',
        },
      },
      subtitle1: {
        fontSize: '1rem',
        '@media (max-width:600px)': {
          fontSize: '0.875rem',
        },
      },
      subtitle2: {
        fontFamily: '"Roman", "Roboto", "Arial", "sans-serif"',
        fontSize: '1.125rem',
        '@media (max-width:600px)': {
          fontSize: '0.875rem',
        },
      },
    },
  });
};

export default theme;
