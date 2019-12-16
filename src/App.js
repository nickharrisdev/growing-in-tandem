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
  //const [date, changeDate] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="App">
        <div className="heading">
          <Typography variant="h2" component="h1">Growing In Tandem</Typography>
          <Typography variant="h6" component="h1" className="sub-heading">
            <i>Lush office greenery is <a href="https://www.exeter.ac.uk/news/featurednews/title_409094_en.html" target="_blank" rel="noopener noreferrer" className="study-link">proven</a> to 
               promote happiness and productivity amongst workers. Inspire personal growth by watering
               the plants on a regular basis!
            </i>
            <hr></hr>
          </Typography>
        </div>
        <div>
          <Calendar theme={theme} />
        </div>
      </div>
    </ MuiPickersUtilsProvider>
  );
}

export default App;
