/*
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
*/
function countRepeat(numbers, find) {
    let count = 0;
    for (num of numbers) {
        if (num == find) {
            count++;
        }
    }
    return count;
}

const numbers = [5,6,11,12,98, 5];
const find1 = 5;
const find2 = 25;
console.log(countRepeat(numbers, find1)); // output: 2
console.log(countRepeat(numbers, find2)); // output: 0
