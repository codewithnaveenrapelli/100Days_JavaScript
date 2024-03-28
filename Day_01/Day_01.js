// Question: Longest Word in the String

// Q: Write a function findLongestWord that take a string input and return the longest word in the string. if there are multiple longest word return the first one encountered.


//Constrains

// input string may contain alphabetics character digits spaces and punctuations.
// input string is non-empty
// input string contain multiple words with comma separated by spaces.

const longestWord = (str) => {
    if (str.trim().length === 0) {
        return false;
    } else {
        word = str.trim().split(" ");
        word = word.sort((a, b) => b.length - a.length)
        // return word.at(-1)
        return word[0];
        // console.log(word);
    }

}

// const longestWord = (str) => {
//     if (str.trim().length === 0) {
//         return false;
//     } else {
//         word = str.trim().split(" ");
//         word = word.reduce((accum, curr) => (curr.length > accum.length ? curr : accum), ""
//         );
//         return word
//     }

// }


const result = longestWord("string contain multiple words with comma separated by space")

console.log(result);



