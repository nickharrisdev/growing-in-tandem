import React from "react";

const Message = (waterToday) => {
    console.log(Object.values(waterToday));
    const waterTodayArr = Object.values(waterToday);
    const toWater = waterTodayArr.map((plant) =>
        <p>{plant}</p>
    )

    return (
    <div>
       Water the following plants today: {toWater}
    </div>
  );
};

export default Message;
