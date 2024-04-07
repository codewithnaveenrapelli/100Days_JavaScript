//? Factorial Finder

// Write a function that make a non-negative integer num as input and returns its factorial The factorial of a non negative integer n, denoted as n!, is the product of all positive integer less than or equal to n The factorial of 0 is defined as 1

// Here are some example of factorial calculations

// factoral(0) => 1
// factorial(1) => 1
// factorial(2)=> 2
// factorial(3)=>6 --> 3*2*1
// factorial(4)=>24

// you function should work for any non negative integer.

const Factorial = (num) => {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}

console.log(Factorial(4));
