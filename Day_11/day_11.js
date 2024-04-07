//? write a function that takes a number as input and return the sum of it's digits

//? constrains

// The input number will always be a positive number
// The input number can have multiple digits
// The output should be the sum of all the digits in the input numbers

const sum = (num) => {
    let arr = Array.from(String(num), Number);
    return arr.reduce((accu, curr) => accu + curr, 0)
}

console.log(sum(1234));