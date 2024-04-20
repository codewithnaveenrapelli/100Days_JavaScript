//? Write a function to count the occurrence of each element in an array and store the count in an object. The keys of the object should represent the element of the array. and values should represent the number of times each element appears in the array.

//? Accept an array of number as input.
//? Create an empty object called counts to store the count of each element.
//? Iterate through each element in the array.
//? For each number increment the count in the count object.
//? if the count of a number does not exists yet initalize it to 1
//? Return the count object containing the count of each element.

const number = (arr) => {
    let arrCount = {};
    for (let element of arr) {
        arrCount[element] = (arrCount[element] || 0) + 1;
    }
    return arrCount

}

console.log(number([1, 2, 2, 3, 4, 5, 4, 3, 1]));