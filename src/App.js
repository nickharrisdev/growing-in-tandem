import React from 'react';
import './App.css';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Calendar from './Calendar';

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="App">
        Hello World
        <Calendar />
      </div>
    </ MuiPickersUtilsProvider>
  );
}

export default App;
