//? Sort an array

//? write a function to sort an array of numbers in a ascending order


//? todo
//? function should take an array as input
//? it should return a new array with the number sorted in ascending order.
//? the original array should not change
//? you are not allowed to use build in sort() method

// const sortAscending = (arr) => {

//     return arr.sort((a, b) => (a - b));
// };

const sortAscending = (arr) => {
    let newArr = [];
    newArr = arr.slice();
    newArr.sort()
    return newArr;
}

console.log(sortAscending([1, 4, 3, 20, 10]));
