//? convert object to array and vise versa

//? convert object to array : write a function objectToArray that takes an object as input and return an array of key-value pairs where each element in the array is an array with two element the key and the corresponding value from the object.

//? Convert Array to Object: Write a function arrayToObject that takes an array of key-value pairs(as returned by the objectToArray function) and return a new object with keys and values from the array

const obj = {
    name: "naveen",
    age: 27,
    city: "mumbai"
}

// convert the object to an array of key value pairs

let objectToArray = Object.entries(obj);
//flat method will remove [ ] inside the array make single [] brackets
console.log(objectToArray.flat());

// convert the array to object

let arrayToObject = Object.fromEntries(objectToArray);
console.log(arrayToObject);