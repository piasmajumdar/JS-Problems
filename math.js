// const Math = {
//     min: function min (num1, num2) {
//         return num2;
//     }
// }

// console.log(Math.min)

const min = Math.min(45, 56, 12, 5, 6);
console.log(min);

const max = Math.max(45, 56, 12, 5, 6);
console.log(max);   

console.log(Math.PI);
console.log(Math.abs(-45));
console.log(Math.round(4.6));
console.log(Math.ceil(4.1)); // output: 5
console.log(Math.floor(4.9));// output: 4
console.log(Math.random()); // output: random number between 0 and 1
console.log(Math.random()*100); // output: random number between 0 and 100

const rand = Math.round(Math.random()*10);
console.log(rand);