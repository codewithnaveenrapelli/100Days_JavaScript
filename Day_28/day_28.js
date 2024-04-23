//? Write a function called truncateString that take two parameters.

//* Str A string that need to be truncated
//? maxLength: An integer representing the maximum length of the string allowed.
//? The fuction should truncate the input string if its length exceeds the specified maxLength if truncate occur the function should add '...' to the end of the truncated string.

//? The input string str will contain only alphanumeric character and punctuations marks.
//? The maximum length maxlength will be positive integer.
//? The output string length should not exceed maxlength + 3 characters due to addition of '...'.

const truncateString = (str, count) => {
    if (count <= 0) {
        return str;
    } else if (str.length > count) {
        return str.slice(0, count).concat('...')
    }
}
console.log(truncateString("Welcome to learn javascript", 8));
console.log(truncateString("Welcome to learn javascript", 0));