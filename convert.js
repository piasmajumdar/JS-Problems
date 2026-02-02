// 12 inch = 1 feet

function inchToFeet(inch) {
    const feet = inch/12;
    return feet;
}

const shuvoHeight = inchToFeet(72);
console.log(shuvoHeight);