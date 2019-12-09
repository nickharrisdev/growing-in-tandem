import React from 'react';
import './App.css';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Calendar from './Calendar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: lightGreen,
  },
});


function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} >
      <div className="App">
        <Typography variant="h4" component="h1">Growing In Tandem</Typography>
        <div className="calendar-container">
          <Calendar theme={theme} />
        </div>
      </div>
    </ MuiPickersUtilsProvider>
  );
}

export default App;
