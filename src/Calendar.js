import React, { useState, useEffect } from "react";
import { DatePicker } from "@material-ui/pickers";
import { Link, withRouter } from 'react-router-dom';
import './App.css';
// import { getPlants } from './lib/fetchPlants';
import Message from './Message.js';
import AddPlantForm from './AddPlantForm'

const Calendar = ({ allPlants, toggleAddingPlant, addingPlant }) => {
  const [date, changeDate] = useState(new Date());
  const [waterToday, setWaterToday] = useState([]);
  const dateStr = date.toString();
  
  // variables used in sorting algorithim 
  const endTime = 1583816340000;
  const selectedSeconds = date.getTime();
  const diffTime = Math.abs(endTime - selectedSeconds);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const dayOfWk = date.getDay();
  const daysPassed = 84 - diffDays;
  const isWeekend = (dayOfWk === 0 || dayOfWk === 6) ? true : false;

  const filterPlantsList = (plantList) => {
    let toWater = [];
    for (let i = 0; i <= plantList.length - 1; i++) {
      let waterAfter = plantList[i].days
      let plantName = plantList[i].name
      let waterAfterNum = Number(waterAfter);

      if (daysPassed % waterAfterNum === 0 && dayOfWk === 1) {
          toWater.push(plantName);
      } else if ((dayOfWk === 3 || dayOfWk === 5 || dayOfWk === 1) && waterAfterNum === 2) {
          toWater.push(plantName);
      } else if ((dayOfWk === 4 || dayOfWk === 1) && waterAfterNum === 3) {
          toWater.push(plantName);
      } else if ((dayOfWk === 1) && (daysPassed % waterAfterNum === 1) && waterAfterNum !== 2 && waterAfterNum !== 3) {
          //catches plants that were supposed to be watered on sunday
          toWater.push(plantName);
      } else if (daysPassed % waterAfterNum === 0 && (waterAfterNum !== 2 && waterAfterNum !== 3) && !(Number.isInteger(waterAfterNum / 7)) && !isWeekend) {
          //ensures plants added to original array get watered on correct days, while excluding original plants. 
          toWater.push(plantName);
      } else if ((dayOfWk === 5) && (daysPassed % waterAfterNum === waterAfterNum - 1) && waterAfterNum !== 2 && waterAfterNum !== 3) {
          //catches plants that were supposed to be watered on saturday.
          toWater.push(plantName);
      }
    }
    console.log(toWater)
    setWaterToday(toWater);
  }

  useEffect(() => {
    filterPlantsList(allPlants);
    toggleAddingPlant(false);
  }, [date, allPlants, addingPlant])

  return (
    <div>
      <div className="calendar-container">
        <div>
          <AddPlantForm toggleAddingPlant={toggleAddingPlant} />
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
      <div className="link-container">
        <Link to="/allplants" className="link-component">
          <p className="link">View All Plants</p>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Calendar);
