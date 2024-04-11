//? write a function findMin that take an array of numbers as input and return the minimum value found in the array


const findMin = (arr) => {
    // arr = arr.sort((a, b) => {
    //     if (b > a) return -1
    // });
    // return arr[0];
    if (arr.length === 0) return "Array Is Empty"
    return Math.min(...arr);
};

console.log(findMin([5, 10, 2, 9, 10]));
console.log(findMin([]));