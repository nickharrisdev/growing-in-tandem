import React from "react";

const Message = (waterToday) => {
    console.log(Object.values(waterToday));
    const waterTodayOuterArr = Object.values(waterToday);
    const waterTodayArr = waterTodayOuterArr[0];
    function toWater(plant) {
        return <p>{plant}</p>
    }

    console.log("list of plants to water today", waterTodayArr);
    return (
    <div className="message">
       Water the following plants today: {waterTodayArr.map(toWater)}
    </div>
  );
};

export default Message;
