//? Write a function to find the max value in an array.

const findMax = (arr) => {
    max = Math.max(...arr);
    return max;
}

console.log(findMax([1, 5, 6, 3, 7, 2]));