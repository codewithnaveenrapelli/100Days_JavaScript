//? Simple Interest Calculator

//? Write a function calculatorSimpleInterest that calculate the simple interest given the principle amount, rate of interest per annum, and time in years.

const calculatorSimpleInterest = (amount, rate, year) => {
    return (amount * rate * year) / 100;
}

console.log(calculatorSimpleInterest(1000, 5, 3))  //? 150