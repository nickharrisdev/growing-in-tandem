import React from "react";
import Typography from '@material-ui/core/Typography';

const Message = ({ waterToday, date }) => {
    function toWater(plant) {
        return (<li data-testid="plant-name">{plant}</li>)
    }

    function checkPlants() {
      if (waterToday.length === 0) {
        return (
          <Typography variant="h5" component="h1">No plants need watering today! Enjoy some you time.</Typography>
        )
      } else {
        return (
          <Typography variant="h5" component="h1">To water on {date.slice(0, 10)}: <ol className="plants-list">{waterToday.map(toWater)}</ol></Typography>
        )
      }
    }

    return (
      <div className="message">
        {checkPlants()}
      </div>
  );
};

export default Message;
