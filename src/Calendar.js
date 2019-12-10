import React, { useState, useEffect } from "react";
import { DatePicker } from "@material-ui/pickers";
import './App.css';
import getPlants from './lib/fetchPlants';

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
    </>
  );
};

export default Calendar;