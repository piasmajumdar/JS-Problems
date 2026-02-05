/**
 * Write a function to find the longest word in a given string.
 * sample-input: I am learning Programming to become a programmer
 * sample-output: Programming
*/

function findLongestWord(str) {
    const words = str.split(" ");
    let longestWord = words[0];
    for (let word of words) {
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}

const inputString = "I am learning Programming to become a programmer";
const longestWord = findLongestWord(inputString);
console.log(`The longest word in the given string is: ${longestWord}`);