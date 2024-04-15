//? write a function to reveres a string without using any build in methods pr libraries. The function should take a string as input and return the reversed string.

const reveresString = (str) => {
    // str = str.split("").reverse().join("");
    // console.log(str);
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr = newStr + str[i]
    }
    return newStr

}
console.log(reveresString("hello"));


