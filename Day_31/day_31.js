//? Simple password validator.

// Write a function called simplePasswordValidator that takes a single parameter.

//? Password: A String representing the password to be validated.
//? The function should validate the password based on the following criteria.

//* The password must contain at least one lowerCase letter one UpperCase lettet and one digit.
//* The length of the password must be at least 8 character.
//* The function should return true if the password meets all the criteria otherwise it should return false.

//? Input:
//? Password: A non empty string representing the password to be validated.

//? Output
//? true if the password meet all the criteria.

//? constrains
//? input string password will contain only alphanumeric character and punctuation marks,


const simplePasswordValidator = (password) => {
    // if (str.length == 0 || str.length <= 8) {
    //     return false;
    // } else if (str.length >= 8) {
    //     return true;

    // }
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasNumber = false;
    for (let char of password) {

        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 95) {
            hasUpperCase = true;
        } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
            hasLowerCase = true;
        } else if (!isNaN(Number(char))) {
            hasNumber = true;
        }
    }

    if (!hasLowerCase || !hasUpperCase || !hasNumber || password.length < 8) {
        return false
    }
    return true;
}

console.log(simplePasswordValidator("afkjshshsdds")); // false
console.log(simplePasswordValidator("afkjshshsdds1A")); //true
console.log(simplePasswordValidator("afk")); //false
console.log(simplePasswordValidator("")); //false


