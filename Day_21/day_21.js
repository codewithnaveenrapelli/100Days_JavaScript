//? Write a function called calculateMean that takes an array of numbers as input and return the mean(average) of these number.

//todo In math the mean is the average of set of number or the numeric value that represent the center of a collection of numbers.

//?The input array may contain positive and negative integers.
//? The input array may be empty if it is empty the function should return 0.


const calculateMean = (arr) => {
    if (arr.length === 0) {
        return 0;
    } else {
        const sum = arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        const avg = sum / arr.length;
        return avg;
    }
}

console.log(calculateMean([1, 2, 3, 4, 5]));
console.log(calculateMean([10, 20, 30, 40, 50]));
console.log(calculateMean([-1, 0, 1]));
console.log(calculateMean([]));
