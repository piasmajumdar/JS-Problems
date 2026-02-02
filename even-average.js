/**
 * Even average of an array
*/

function evenAverage(numbers) {
    let evens =[];
    for (const number of numbers) {
        if(number%2 === 0){
            evens.push(number);
        }
    }
    console.log('Even numbers are: ', evens);

    let sum =0;
    for (const even of evens) {
        sum += even;
    }
    return sum/evens.length;
}

const numbers = [3, 4 ,7, 8, 20];
const avg =  evenAverage(numbers);
console.log("Average of even numbers are: ", avg);