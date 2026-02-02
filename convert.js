// 12 inch = 1 feet

function inchToFeet(inch) {
    const feetFraction = inch/12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + "ft " + inchRemaining + "in";
    return result;

}

const shuvoHeight = inchToFeet(75);
console.log(shuvoHeight);



function mileToKilometer(mile) {
    const kilo = mile*1.60934;
    return kilo;
}

function kilometerToMiles(kilo){
    const mile = kilo*0.621371;
    return mile;
}

const distanceInKilo = mileToKilometer(5);  
console.log(distanceInKilo);

const distanceInMile = kilometerToMiles(8);  
console.log(distanceInMile);