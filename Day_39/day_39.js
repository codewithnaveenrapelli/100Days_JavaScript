//? calculate age from birthDate.

//? Create a function calculateAge that take a birthDate as input and return the current age of the person. The birthDate will be provided in the format.

//? Requirement
//? The function must handle leap year and varying numbers of the days in each month accurately.
//? Consider the timeZone difference and ensure the age is calculated based on current date in your local time zone.
//? The output should be the age in whole years.


//? hint
// check if the current month is less than the birth month or if it's same month but today date is before the birth date. if either condition it true, it subtracts one from the age because the birthday has not yet occurred this year.

//? CurrentDate
//? currentDate Year & birthday year
//? age = currentDate - birthDate
//? 

const calculateAge = (dob) => {
    let currentDate = new Date();
    let birthDate = new Date(dob);
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    let month = currentDate.getMonth() - birthDate.getMonth();
    let day = currentDate.getDay() < birthDate.getDay();
    if (month < 0 || month === 0 && day) {
        age--;
    }
    return age;

}
console.log(calculateAge("1990-02-01"));