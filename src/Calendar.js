import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";

const Calendar = () => {
  const [date, changeDate] = useState(new Date());

  // prettier-ignore
  return (
    <>
      <DatePicker
        autoOk
        orientation="landscape"
        variant="static"
        openTo="date"
        value={date}
        onChange={changeDate}
      />
    </>
  );
};

export default Calendar;