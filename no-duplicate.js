/**
 * array has some duplicate numbers
 * []
*/

const biriyaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul'];

const numbers = [1, 5, 61, 5, 87, 5, 6, 76, 61];

function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if(unique.includes(item)=== false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(biriyaniKhor);
console.log(uniqueArray);