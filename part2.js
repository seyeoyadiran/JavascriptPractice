/* Road trip

You are planning a cross-country road trip!
The distance of the trip, in total, is 1,500 miles.
Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.
You have a fuel budget of $175.
The average cost of fuel is $3 per gallon.
Set up a program to answer the following questions:
How many gallons of fuel will you need for the entire trip?
Will your budget be enough to cover the fuel expense?
How long will the trip take, in hours?
Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
Log the results of your calculations using string concatenation or template literals.
*/


const totalDist = 1500;
const dollarsPerGallon = 3;
const fuelBudget = 175;

let mpgfor55mph = 30;
let mpgfor60mph = 28;
let mpgfor75mph = 23;

/* Checking how many gallons of fuel will be needed for the entire trip */
const gallonsForTrip55mph = totalDist / mpgfor55mph;
console.log(`At 55 miles per hour, it will take you ` + gallonsForTrip55mph + ` galllons to complete the entire trip`)

const gallonsForTrip60mph = totalDist / mpgfor60mph;
console.log(`At 60 miles per hour, it will take you ` + gallonsForTrip60mph + ` galllons to complete the entire trip`)

const gallonsForTrip75mph = totalDist / mpgfor75mph;
console.log(`At 75 miles per hour, it will take you ` + gallonsForTrip75mph + ` galllons to complete the entire trip`)

console.log(`\n`)

/* Will the budget be enough to cover fuel expenses? */
console.log(`(True or False)`);
const budgetAt55 = (gallonsForTrip55mph * dollarsPerGallon) <= fuelBudget;
console.log(`Will the fuel budget going 55mph be enough for the cost of this trip?...` + budgetAt55)

const budgetAt60 = (gallonsForTrip60mph * dollarsPerGallon) <= fuelBudget;
console.log(`Will the fuel budget going 60mph be enough for the cost of this trip?...` + budgetAt60)

const budgetAt75 = (gallonsForTrip75mph * dollarsPerGallon) <= fuelBudget;
console.log(`Will the fuel budget going 75mph be enough for the cost of this trip?...` + budgetAt75)

console.log(`\n`)

/*How long will the trip take */
let tripHours55mpg = totalDist / 55;
console.log(`The total amount of hours it will take for the trip at 55 mph will be: ` + tripHours55mpg + ` hours`);
let tripHours60mpg = totalDist / 60;
console.log(`The total amount of hours it will take for the trip at 60 mph will be: ` + tripHours60mpg + ` hours`);
let tripHours75mpg = totalDist / 75;
console.log(`The total amount of hours it will take for the trip at 75 mph will be: ` + tripHours75mpg + ` hours`);

//Final result
console.log(`\n`)
console.log(`In my opinion I believe that going 60 mph will be the best option because you will get to your destination faster than going 55 mph while still remaining within budget.`)