//? validate a credit card number

// write a function credit card number using the lun algorithm.

//? Requirements:

// Write a function name validatedCreditCard that takes a credit card number as a string.
// The function should return true if the number is valid according to the luhn algorithm and false otherwise
// Ensure the function can handle numbers as a string. which may includes spaces and dashes.

//Luhn Algorithm steps:
// prepare the number
// Start with the digits of the number for example if validating the number.789305962349
// reveres digits.
// reverse the digit of the number for example it become 94329503987
// double every second digit.
// starting from the first digit double every second digit.
// for example 9, 4*2, 3, 2*2, 9, 5*2,0,3*2,9,8*2,7
// which translate 9,8,3,4,9,10,6,9,16,7
// substract 9 from number higher than 9
// if double number results in a number grater than 9 subtract 9 from it.
// mow series is 9834916977
// sum all digits
// add al the digits together.
// 9+8+3+4+9+10+6+9+16+7= ?
// check module 10.
//if the sum module 10 is 0 the number is valid according the luhn formula.
// total%10=6 =value which is not 0 so not a valid number according to luhn

const validatedCreditCard = (str) => {

    //initial steps:
    str = str.replace(/\D/g, "");
    // reverse string.
    let revNum = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revNum = revNum + str[i];
    }
    // console.log(revNum);

    // step 2
    let double = str.split("").map((currentValue, index) => {
        if (index % 2 !== 0) {
            currentValue = currentValue * 2
            if (currentValue > 9) {
                currentValue = currentValue - 9;
            } else {
                currentValue = currentValue
            }

        }
        return currentValue;
    }).reduce((acc, curr) => acc + Number(curr), 0);
    console.log(double);
    return double % 10 === 0;
}
console.log(validatedCreditCard("8279 1232 7352 0569"));