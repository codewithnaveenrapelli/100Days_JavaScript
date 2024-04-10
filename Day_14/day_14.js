//? write a function called isPowerOfTwo that takes an integer num as input and return true if num is power of two and false otherwise.



// Notes
//? The input num will be a positive integer.
//? Zero(0) and negative integer are not considered power of two.
//? The function should return true if the given number is a power of 2 and false otherwise.
//? We can slove it using bitwise operator.


const isPowerOfTwo = (num) => {
    let op = false;
    for (let i = 1; i < num; i++) {
        if (2 ** i == num)
            op = true;
    }
    return op;

    // for (let i = 1; i < num; i++) {
    //     if (Math.pow(2, i) == num) {
    //         return true;
    //     }
    // }
    // return false;

}

console.log(isPowerOfTwo(8));