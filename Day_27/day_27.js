//? Write a function called repeatString that take two parameters.

//? str: A string that need to be repeated.
//? num: An integer representing the number of times the string should be repeated.
//? The function should repeat the input string str the specified number of times num and return the resulting string.

const repeatString = (str1, num) => {
    return num > 0 ? str1.repeat(num) : str1;

}

console.log(repeatString('ab', 0));