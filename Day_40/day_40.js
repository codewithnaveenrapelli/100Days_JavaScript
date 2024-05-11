//? simple bar chart from array data.

//? Create a function generateBarChart that takes an array of numbers and generate a simple text-base bar chart.

// const generateBarChart = (arr) => {
//     const newArr = arr.map((currElem, index) => {
//         // console.log(`${index + 1}: ${currElem + '*'}`);
//         let star = '';
//         let num = 0;
//         while (num < currElem) {
//             star = star + '*'
//             num++
//         }

//         return `${index + 1}: ${star}`;
//     })
//     return newArr.join("\n");
// }

const generateBarChart = (arr) => {
    return arr.map((currentValue, index) => {
        return `${index + 1} : ${"*".repeat(currentValue)}`
    }).join("\n")
}

console.log(generateBarChart([2, 5, 6, 8, 6]));