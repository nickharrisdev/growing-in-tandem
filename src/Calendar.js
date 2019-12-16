import React, { useState, useEffect } from "react";
import { DatePicker } from "@material-ui/pickers";
import './App.css';
import { getPlants } from './lib/fetchPlants';
import Message from './Message.js';
import AddPlantForm from './AddPlantForm'

const Calendar = () => {
  const [date, changeDate] = useState(new Date());
  const [waterToday, setWaterToday] = useState([]);
  const [addingPlant, toggleAddingPlant] = useState(false);
  const dateStr = date.toString();

  useEffect(() => {
    const plantsArr = getPlants(date);
    setWaterToday(plantsArr);
    toggleAddingPlant(false);
  }, [addingPlant, date])

  return (
    <div className="calendar-container">
      <div>
        <AddPlantForm toggleAddingPlant={toggleAddingPlant}/>
      </div>
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
      </div>
      <div>
        {waterToday && dateStr ? <Message waterToday={waterToday} date={dateStr}/> : null}
      </div>
    </div>
  );
};

export default Calendar;