import React, { useState, useEffect } from "react";
import { DatePicker } from "@material-ui/pickers";
import './App.css';
import getPlants from './lib/fetchPlants';
import Message from './Message.js'

const Calendar = () => {
  const [date, changeDate] = useState(new Date());
  const [waterToday, setWaterToday] = useState([]);

  useEffect(() => {
    //change the state of plants to be rendereds
    const plantsArr = getPlants(date);
    setWaterToday(plantsArr);
  }, [date])


  return (
    <>
      <DatePicker
        autoOk
        color="secondary"
        orientation="landscape"
        variant="static"
        openTo="date"
        value={date}
        onChange={changeDate}
        className="date-picker"
      />
      {waterToday ? <Message waterToday={waterToday} /> : null} 
    </>
  );
};

export default Calendar;