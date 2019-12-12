import React from "react";
import Typography from '@material-ui/core/Typography';

const Message = ({ waterToday, date }) => {
    function toWater(plant) {
        return (<li data-testid="plant-name" key={plant}>{plant}</li>)
    }

    function checkPlants() {
      if (waterToday.length === 0) {
        return (
          <Typography variant="h5" component="h1" className="no-watering">No plants need watering today!<br></br> Enjoy some you time.</Typography>
        )
      } else {
        return (
          <Typography variant="h5" component="h1">
            <strong>To water on {date.slice(0, 10)}</strong>
            <ol>
              {waterToday.map(toWater)}
            </ol>
          </Typography>
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
