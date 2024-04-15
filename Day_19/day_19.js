//? Write a function ti check if a given string start with a specific substring.

//? str: A string(eg: "Hello World")
//? subStr: A subString to check if it starts with given string (eg: "Hello").
//? Output: true if the given string starts with specified subString, otherwise false.


const checkSubString = (str, substr) => {
    // return str.toLowerCase().startsWith(substr.toLowerCase());
    return str.toLowerCase().slice(0, substr.length) === substr.toLowerCase();
}
console.log(checkSubString("Hello world", "hello"));
console.log(checkSubString("Hello world", "wello"));