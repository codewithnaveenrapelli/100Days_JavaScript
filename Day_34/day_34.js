//? Remove duplicate from array

//? write a function removeDuplicate that take an array of the element as input and return a new array with duplicate element removed.

//? task is to implement the removeDuplicate function using javascript and ensure that the returned array contain only unique element from input array. The order of element in the output array should be same as the original array. with first occurrence of each unique element preserved.

//? The input array may contain element of any data type
//? The function should return a new array with duplicate element removed while preserving the order of element from the original array.
//? you should use the provided removeDuplicate function signature without any additional parameter.



const removeDuplicate = (arr) => {
    return [...new Set(arr)];
}
console.log(removeDuplicate([1, 2, 3, 3, 4, 4, 5]));
console.log(removeDuplicate(["a", "b", "c", "b", "a"]));