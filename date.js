const today = new Date();
const date = new Date('2062-12-25');

console.log(today);
console.log(date);

console.log(date.getMonth());
console.log(date.getDay());

const specificDate = new Date(2091, 0, 26);
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate.toLocaleString('en-GB'));


// unix epoc