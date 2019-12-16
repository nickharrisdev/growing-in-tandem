const plants = require('./plants.json');

export function addPlant (newPlantName, days) {
    // takes in name, water after x days, appends a keyvalue pair to the plants array
    plants.push({name: newPlantName, water_after: days})
}

export function getPlants(selectedDate) {
    //takes in a date, and returns the plant(s) that need to be watered on the given day. 
    console.log(plants);
    const endTime = 1583816340000;
    let waterToday = [];
    const selectedSeconds = selectedDate.getTime();
    const diffTime = Math.abs(endTime - selectedSeconds);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const dayOfWk = selectedDate.getDay();
    const daysPassed = 84 - diffDays;
    const isWeekend = (dayOfWk === 0 || dayOfWk === 6) ? true : false;
    
    /// loop through the plants to get water after days, then evaluate: 
    for (let i = 0; i <= plants.length - 1; i++) {
        let waterAfter = plants[i].water_after.split("").splice(0, 2).join("");
        let plantName = plants[i].name
        let waterAfterNum = Number(waterAfter);

        if (daysPassed % waterAfterNum === 0 && dayOfWk === 1) {
            waterToday.push(plantName);
        } else if ((dayOfWk === 3 || dayOfWk === 5 || dayOfWk === 1) && waterAfterNum === 2) {
            waterToday.push(plantName);
        } else if ((dayOfWk === 4 || dayOfWk === 1) && waterAfterNum === 3) {
            waterToday.push(plantName);
        } else if ((dayOfWk === 1) && (daysPassed % waterAfterNum === 1) && waterAfterNum !== 2 && waterAfterNum !== 3) {
            //catches plants that were supposed to be watered on sunday
            waterToday.push(plantName);
        } else if (daysPassed % waterAfterNum === 0 && (waterAfterNum !== 2 && waterAfterNum !== 3) && !(Number.isInteger(waterAfterNum / 7)) && !isWeekend) {
            //ensures plants added to original array get watered on correct days, while excluding original plants. 
            waterToday.push(plantName);
        } else if ((dayOfWk === 5) && (daysPassed % waterAfterNum === waterAfterNum - 1) && waterAfterNum !== 2 && waterAfterNum !== 3) {
            //catches plants that were supposed to be watered on saturday.
            waterToday.push(plantName);
        }
    }
    return waterToday;
}
