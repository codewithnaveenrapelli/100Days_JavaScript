//?  Hash Tag Generator

//? Q - Implement a function generateHashTag that generate a hash tag from a given input string The Hash tag should be consider as follow

// ? Input should be converted to a hash tag format where each word is capitalized and concatenated together without space.
//? if the length of the string is greater than 280 character or if the input string is empty or contain any whiteSpace then function should return false
//? otherwise function should return the generated hash tag prefix with the string 

//? One way of doing 

const hashTagGenerator = (str) => {
    if (str.length > 280 && str.trim().length === 0) {
        return false;
    } else {
        // converting string to array using split method.
        str = str.split(" ");
        // console.log(str); [ 'hello', 'welcome', 'javascript' ]
        str = str.map((currentElement) =>
            // console.log(currentElement)
            // we get first element of the word where index number is 0
            // console.log(currentElement[0])
            currentElement.replace(currentElement[0], currentElement[0].toUpperCase())

        );
        // here we are converting array to string using join method and concatenating ths string
        // str = str.join(""); //HelloWelcomeJavascript
        // now adding # symbol before the string literals
        str = `#${str.join("")}`;
        return str; // [ 'Hello', 'Welcome', 'Javascript' ]

    }
};

//? another way of doing

// const hashTagGenerator = (str) => {
//     if (str.length > 280 && str.trim().length === 0) {
//         return false;
//     } else {
//         // converting string to array using split method.
//         str = str.split(" ");
//         // console.log(str); [ 'hello', 'welcome', 'javascript' ]
//         str = str.map((currentElement) =>
//             // console.log(currentElement)
//             // we get first element of the word where index number is 0
//             // console.log(currentElement[0])
//             // currentElement.replace(currentElement[0], currentElement[0].toUpperCase())

//             //? another way of doing
//             //? we are using charAt() Method which will get the first index of the element and making it to upperCase and concatenating the rest of string using slice() method is used to slice the words.
//             currentElement.charAt(0).toUpperCase() + currentElement.slice(1)

//         );
//         // here we are converting array to string using join method and concatenating ths string
//         // str = str.join(""); //HelloWelcomeJavascript
//         // now adding # symbol before the string literals
//         str = `#${str.join("")}`;
//         return str; // [ 'Hello', 'Welcome', 'Javascript' ]

//     }
// };

console.log(hashTagGenerator("hello welcome javascript"));