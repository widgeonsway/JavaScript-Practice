/* CHALLENGE #9

Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17,21,23] will print "... 17°C in 1 days... 21°C in 2 days ... 23°C in 3 days..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17,21,23]
TEST DATA 2: [12,5,-5,0,4]

*/

////PROBLEM SOLVING METHOD
// 1. Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

//2. Breaking up into sub-problems
// - Transform array into string
// - Transform each element into a string with degrees celcius
// - Strings need to contain day (index + 1)
// - Add ... between elements
// - Log to console

function printForecast(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      str = str + `${arr[i]}°C in ${i + 1} day...`;
    } else {
      str = str + `${arr[i]}°C in ${i + 1} days... `;
    }
  }
  console.log(`...` + str);
}

const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];
printForecast(temps1);
printForecast(temps2);
