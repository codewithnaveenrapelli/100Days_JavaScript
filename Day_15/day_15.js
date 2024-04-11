//? Write a function to calculate the sum of the square of all elements in an array for example: given array[1,2,3] the function should return 14 because 1*1 and 2*2 and 3*3 = 1+4+9=14


const square = (arr) => {
    return arr.reduce((accum, currentEle) => (accum = accum + currentEle * currentEle), 0)
};

console.log(square[1, 2, 3]);
