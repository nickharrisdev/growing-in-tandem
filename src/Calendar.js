import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import './App.css';

const Calendar = () => {
  const [date, changeDate] = useState(new Date());

  // prettier-ignore
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