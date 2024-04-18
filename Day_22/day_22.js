//? write a function findMedian(arr) that take an array of numbers as input and return the median value. if the array has an even numbers of element return the average of the two middle values.

//? For Example: the mean of 3,3,5,9,15, is 5 if there is even number of observation then there is no single middle value; the median is then usually defined to be the mean of two middle values; so the median of 3,5,7,9 is (5+7)/2 = 6;

//? sort the array in ascending order
//? if the array has an odd number of element the median is the middle element.
//? if the array has an even number of element the median is the average of the two middle element.


const findMedian = (arr) => {
    // sorting array
    arr = arr.sort((a, b) => a - b);
    // check if array length is add or eve
    let length = arr.length;
    let mid = Math.floor(length / 2);
    // console.log(mid);
    if (length % 2 === 0) {
        // for even length array values
        return (arr[mid] + arr[mid - 1]) / 2
    } else {
        // for odd length array values
        return arr[mid]
    }

}

console.log(findMedian([5, 3, 9, 1, 7]));
console.log(findMedian([2, 4, 6, 8]));
console.log(findMedian([1, 3, 5, 7, 9, 11]));