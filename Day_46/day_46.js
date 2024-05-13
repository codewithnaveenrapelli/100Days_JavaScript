//? Mobile Number Validation

// write a function that takes a string as input and return true if the string represent a valid indian mobile number and false otherwise.


// validation requirement.
// length: An Indian mobile number should have exactly 10 digits.
// Starting digit : The number start with 6,7,8,9 which are valid starting digits for indian mobile number.

const validation = (mobileNumber) => {
    const reg = /^[6789][0-9]{9}/;
    return reg.test(mobileNumber);
}
console.log(validation("9898989898"));
console.log(validation("2898989898"));