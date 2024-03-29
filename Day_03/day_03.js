//? Count Occurrence of the character

//? Write a function called countChar that take two parameter: a string and a character to count The function should return the number of times the specified charater appears in the string

//? The function should be case-sensitive
//? The function should handle both lower and upper case
//? The character parameter can be any printable ASCII Character 


const countChar = (str, charCount) => {
    // converting to lower case letter
    str = str.toLowerCase();
    charCount = charCount.toLowerCase();
    // converting string to array and using reduce method we can get the signle value output
    totalWords = str.split("").reduce((accum, currentValue) => {
        if (currentValue === charCount) {
            accum++;
        }
        return accum;
    }, 0);
    return totalWords
}

console.log(countChar("hello welcome", "L"));