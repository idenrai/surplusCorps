import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import customTheme from '../config/customTheme';
import Router from './router';

const muiTheme = getMuiTheme(customTheme);

ReactDOM.render((
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router />
  </MuiThemeProvider>
), document.getElementById('root'));
