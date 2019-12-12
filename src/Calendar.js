import React, { useState, useEffect } from "react";
import { DatePicker } from "@material-ui/pickers";
import './App.css';
import getPlants from './lib/fetchPlants';
import Message from './Message.js';

const Calendar = () => {
  const [date, changeDate] = useState(new Date());
  const [waterToday, setWaterToday] = useState([]);
  const dateStr = date.toString();

  console.log(typeof dateStr) 

  useEffect(() => {
    //change the state of plants to be rendered
    const plantsArr = getPlants(date);
    setWaterToday(plantsArr);
  }, [date])


  return (
    <div className="date-picker-container">
      <DatePicker
        autoOk
        color="secondary"
        orientation="portrait"
        variant="static"
        openTo="date"
        value={date}
        onChange={changeDate}
        data-testid="date-picker"
      />
      {waterToday && dateStr ? <Message waterToday={waterToday} date={dateStr}/> : null} 
    </div>
  );
};

export default Calendar;