//? Write a function called findMode that takes an array of numbers as input and return the mode of the array(the number that appears most frequently).

function findMode(arr) {
    let count = {};
    let maxNum = 0;
    let mode;
    for (let element of arr) {
        count[element] = (count[element] || 0) + 1;
        if (count[element] > maxNum) {
            maxNum = count[element]
            mode = element
        }
    }
    return mode
}

console.log(findMode([1, 2, 3, 2, 3, 1, 4, 2])); //output 2