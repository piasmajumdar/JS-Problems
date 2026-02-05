// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function celToFah(celsius) {
    return (celsius/5 * 9)+32;
}

const tempInCelsius = 37;;
const tempInFahrenheit = celToFah(tempInCelsius);
console.log(`${tempInCelsius}°C is equal to ${tempInFahrenheit}°F`);

