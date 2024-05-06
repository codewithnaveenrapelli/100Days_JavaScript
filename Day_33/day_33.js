//? Random Hex Color Generator

//? Write a function randomHexColor that generate a random hexadecimal color code each item it is called. The function should return a string representing the random color code in the format #RRGGBB where RR, GG, BB are two digit hexadecimal numbers representing the red, green, blue component of the color respectively.

//? Your challenge is to implement the randomHexColor function using javascript and ensure that it produce a valid hexadecimal color code with a length of 7 character(including the # symbol)

//? Constrains
//? The out color code should alway start with # followed by six hexadecimal character
//? The function should not take any parameter.
//? The generated color code should be unique and evenly distributed across the entire range of possible hexadecimal color code.


//? Hint
//? Convert the random number into a hexadecimal string representation.

const randomHexColor = () => {
    return `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
}
console.log(randomHexColor());