//? Write a function to check if a checkCharacter is uppercase or lowercase.


//? constrains
//? The input char will be a single character.
//? The character can be any printable ASCII character
//? You can assume that the input will always be a string of length 1.


const checkCharacter = (str) => {
    if (str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90) {
        return true;
    }
    return false;
};
// console.log(checkCharacter("s")); // false
console.log(checkCharacter("S")); // true