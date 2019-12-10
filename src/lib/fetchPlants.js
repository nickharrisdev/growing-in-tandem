const plants = require('./plants.json');

function getPlants(selectedDate) {
    const endTime = 1583798040000;
    let waterToday = [];
    const diffTime = Math.abs(endTime - selectedDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    
    //takes in a date, and returns the plant(s) that need to be watered on the given day. 
    const daysPassed = 84 - diffDays;

    //
    const isWeekend = selectedDate.getDay() === (5 || 6) ? true : false;

    /// loop through the plants to get water after days, then evaluate: 
    for (let i = 0; i <= plants.length - 1; i++) {
        let waterAfter = plants[i].water_after.split("").splice(0, 2).join("");
        console.log("Water", plants[i].name, "after", waterAfter, "days");
        
        // if (daysPassed % waterAfter === 0 && !isWeekend) {
        //     waterToday.push(/*currentplantname*/)
        // } else if (/* take care of weekend cases here */ ) {
        //     waterToday.push(/*currentplantname*/)
        // }
    }
    
    //console logs for testing 
    console.log("Plant array:", plants);
    console.log("Selected date", selectedDate);
    console.log("Days between selected date and end date", diffDays);
    console.log("Time of selected date", selectedDate.getTime());
    console.log(daysPassed, "days have passed since scheduler began");
}

module.exports = getPlants;