//? Write a function that takes an array of integers as input and remove any duplicate elements, returning a new array with only the unique elements

// Example:


// The new set() method in javascript create a new set objects. A set Object is a collection of unique values, it can store any type of values wether primitive value or object reference

// constrains

//? The input array may contain both positive and negative integer
//? The input array may be empty
//? The element in the input array are not guaranteed to be stored
//? The output array should retain the original order of element from the input array.


const removeDuplicateElement = (arr) => {
    let newArr = [...new Set(arr)];
    // console.log(newArr);
    return newArr;
}

console.log(removeDuplicateElement([1, 2, 3, 2, 1, 4]));
console.log(removeDuplicateElement([1, 2, 3, 2, 7, 7, 1, 4]));
console.log(removeDuplicateElement([]));


