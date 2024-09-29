/* CHALLENGE #8

Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

    Create an array called bills containing all 10 test bill values.

    Create empty arrays for the tips and the totals (tips and totals)

    Use the calcTip function we wrote before to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!


TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.


BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge. Here is how to solve it if you feel like it:

    First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

    To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

    Call the function with the totals array. */

function calcTip(bills) {
  if (bills >= 50 && bills <= 300) {
    return bills * 0.15;
  } else {
    return bills * 0.2;
  }
}
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);

  console.log(
    `The bill is: ${bills[i]}, the tip is: ${tips[i]}, and the total is: ${totals[i]}`
  );
}

const myAverage = calcAverage(totals);
console.log(`The average of all totals is: ${myAverage}`);
