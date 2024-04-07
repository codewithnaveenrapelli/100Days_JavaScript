//? calculate the average

// write a function to calculateAverage that take an array of numbers as input and return the average of those numbers

// function  should consider below points

//? Accept array of number as input.
//? Calcculate the sum of all the numbers in the array
//? Divide the sum of the total numbers of the element in the array to find the average
// Return the calculated average

// Example:

const calculateAverage = (arr) => {
    let total = arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    return total / arr.length;
}


console.log(calculateAverage([5, 10, 2, 8])); // output 6