//? write a function to calculate the factorial of a number(using Recursion).

//* Recursion:
//? Recursion is a programming technique where a function calls itself in order to solve the problem. it's a function that calls itself with smaller or simple inputs until it reaches a base case.
//* Base case
//? The base case is the condition in a recursive function that stops the recursion it's the point at which the function stops calling itself and return a value without further recursion without a base case the recursion function would continue calling itself. leading to what's know as infinite recursion.
//* Recursive case:
//? The recursive case is the condition in a recursive function that determine when the function should call itself again.it's typically an expression or condition that evaluates to true for certain inputs indicating that further recursion is necessary to slove the problems. Each recursive call should move closer to the base case eventually leading to termination of the recursion.


const factorial = (num) => {
    if (num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1)
    }
}
console.log(factorial(5));