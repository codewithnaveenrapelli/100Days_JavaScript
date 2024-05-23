//? Date Validation.

//? Write a function name isValidDate that take a string input representing a date and determine if it is a valid date in the format MM/DD/YYYY. The valid date range should be from January 1, 1990 to December 31, 2099.

//Todo
//* Format Check : The date must strictly followed by MM/DD/YYYY format. Ensure that slashes (/) are used as separator.

// Month validation : valid Month are from 01 (January) to 12 (December).
// Day Validation: Days should valid according to the month.
// 01-31 for january,march,may,july,august,october,december.
// 01-30 for april june september november.
// 01-28 for february in common year and 01-29 for feb in leap year.
// Year validation year should be within the range from 1990 to 2099.


const isValidDate = (dateFormat) => {
    return /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[0-9]|3[0-1])\/((19|20)[0-9]{2})$/.test(dateFormat)
}


console.log(isValidDate("12/15/2021"));
console.log(isValidDate("02/29/2021"));
console.log(isValidDate("02/29/2021"));
console.log(isValidDate("02/29/1880"));

