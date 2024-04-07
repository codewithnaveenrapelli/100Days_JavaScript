// Write a function arrayAreEqual that take two array arr1 and arr2 as input and return true if the array are equal (contain the same element in the same order and false otherwise)

// The function should return false if the arrays have different lengths
// The function should compare each element of arr1 with arr2
// The function should return true only if the all element in arr1 equal to arr2

const arrayAreEqual = (arr1, arr2) => {
    if (arr1.length != arr2.length) {
        return false;
    } else {
        let equal = arr1.every((cuurentValue, index) => cuurentValue === arr2[index]);
        return equal;
    }
}
console.log(arrayAreEqual([1, 2, 4], [1, 2, 4]));
console.log(arrayAreEqual([1, 2, 5], [1, 2, 4]));