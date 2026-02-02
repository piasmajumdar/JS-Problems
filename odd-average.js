/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 * 
*/

/**
 * put odd numbers in a new array
*/

function oddAverage(numbers) {
    odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            // console.log(number);
            odds.push(number);
        }
    }
    //odds is the array that contains only the odd numbers
    console.log('odd numbers are: ', odds);

    let sum = 0;
    for (const odd of odds){
        sum += odd;
    }
    const count = odds.length;
    console.log('sum of odd numbers: ', sum);
    console.log('count of odd numbers: ', count);
    const avg = sum/count;
    return avg;

}

const numbers = [42, 13, 7, 26, 5, 8, 19];
const result = oddAverage(numbers);
console.log('average of the odd number is: ',result);  // Output should be 11.333333333333334