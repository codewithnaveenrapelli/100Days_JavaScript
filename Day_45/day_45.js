//? Password validation.

// create a function validatePassword that checks if a given password string meets the following criteria.

// Minimum length: The password must be at least 8 character long.
// Case Requirement: The password must include at least one uppercase letter and at least one lowercase letter.
// Numerical Requirement Tha password must contain at least one digit.
// special character requirement The password must have at least one special character from the !@#$%^&*()_-+=.


//? Requirement.
// The function should return true if the password meets all the criteria and 

const validatePassword = (password) => {
    const reg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/;
    return reg.test(password)
}

console.log(validatePassword("Pass123!"));
console.log(validatePassword("Password"));