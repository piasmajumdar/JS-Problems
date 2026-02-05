// Generate a random number between 10 to 20.

function getRandomNumber(min, max) {
    return Math.ceil(Math.random()*(max-min)+min);
}

console.log(getRandomNumber(10, 20));