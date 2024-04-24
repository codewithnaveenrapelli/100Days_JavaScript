//? Write a function called numberRange that generate an array containing consecutive numbers from a to b.

//? An integer representing the starting number of the range.
//? An integer representing the ending number of the range.
//? arr: an optional parameter representing the array to store the number in the range. it default to an empty array.

//Output:
//? An Array Containing consecutive numbers from a to b (inclusive)

//*Constraints
// a and b will be integer.
// a will be less than or equal to b.

const numberRange = (start, end) => {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;

}
console.log(numberRange(0, 5)); // [0,1,2,3,4,5]
console.log(numberRange(3, 7)); // [3,4,5,6,7]

