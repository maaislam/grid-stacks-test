import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import theme from './components/theme';
import { ThemeProvider } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme('light')}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
