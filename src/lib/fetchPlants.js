const plants = require('./plants.json');

function getPlants(selectedDate) {
    const endTime = 1583798040000;
    let waterToday = [];
    const selectedSeconds = selectedDate.getTime();
    const diffTime = Math.abs(endTime - selectedSeconds);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const dayOfWk = selectedDate.getDay();
    
    //takes in a date, and returns the plant(s) that need to be watered on the given day. 
    const daysPassed = 84 - diffDays;

    //determines if it's a weekend or not 
    const isWeekend = dayOfWk === 0 || dayOfWk === 6 ? true : false;

    /// loop through the plants to get water after days, then evaluate: 
    for (let i = 0; i <= plants.length - 1; i++) {
        let waterAfter = plants[i].water_after.split("").splice(0, 2).join("");
        let plantName = plants[i].name
        //console.log("Water", plantName, "after", waterAfter, "days");
        
        if (daysPassed === 1) {
            //no watering on day 1
            waterToday = [];
        } else if (daysPassed % waterAfter === 0 && !isWeekend) {
            //normal watering case
            waterToday.push(plantName)
        } else if (daysPassed % waterAfter === 1 && !isWeekend) {
            // picks up the plants to be watered every three days
            if (waterAfter % 3 === 0) {
                waterToday.push(plantName)
            }
        } 
    }
    
    // daysPassed % waterAfter === 1 && (daysPassed + 1) % waterAfter !== 0 && (daysPassed - 1) % waterAfter !== 0
    //console logs for testing 
    console.log(diffTime, diffDays, daysPassed, selectedDate, selectedSeconds)
    console.log("To water today:", waterToday)
    return waterToday;
}

module.exports = getPlants;