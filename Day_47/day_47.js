// Extract Number from a string.

//? write a regular expression to extract all numbers from a given string.

//? Requirement.
// Extract all number from a string.
// Return the number as a array.


// use case
// parsing numerical data from text
// extracting numeric values from calculations
// filtering number from mixed content

const extractNumber = (str) => {
    let regex = /\d+/g;
    return str.match(regex);

}

console.log(extractNumber("abc123def456")); // ["123","456"]
console.log(extractNumber("no number")); // [null]