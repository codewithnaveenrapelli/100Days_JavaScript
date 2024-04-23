//* write a function to find the nth fibonacci number.

//? The Fibonacci series is a sequence of numbers in which each number is the sum of two preceding ones.
//? it starts with 0 and 1 and the subsequent are calculated by adding the last two numbers so the fibonacci series looks like this 0,1,1,2,3,5,8,13,21

//? syntax: f(n) = f(n-1)+f(n-2), where f(1) + f(2) =1

const fibonacci = (num) => {
    if (num <= 1) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(8));
console.log(fibonacci(13));