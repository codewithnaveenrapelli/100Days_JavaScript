//? Write a function to determine whether a given string is palindrome or not. A palindrome is a word, phrase,number, or sequence of characters that reads the same forward and backward  ignoring spaces punctuations and capitalizations

// constrains

// The input string may contain letter,digits,spaces punctuation and special Character
//? The Function should be case-insensitive meaning Racecar and racecar should be considered the same.
//? ignore spaces punctuations and special character when determining if a string is a palindrome.
//? The function should return true if the input string is a palindrome and false otherwise


const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/\W/g);
    let reverse = str.split("").reverse().join("");;
    console.log(reverse);
    return str === reverse ? true : false;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal, panama"));

//Note
//? replace(/\W/g,""): uses the replace() method witha regular expression (/\W/g) to remove all non word character from the string Here.
//? \W matches any non word character(equivalent to [^a-zA_Z0-9__]).
//? The g flag performs a global search meaning it replace all occurrence of non-word character in the string.
//? so replace(/\w/g,"") replace all non-word character with an empty string effectively removing them from the strng 