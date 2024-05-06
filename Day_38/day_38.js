//? Number of Days Between Two Dates.

//? write a function calculateDaysBetweenDates that calculate the number of days between two dates. the date will be provided in the format "YYYY-MM-DD"

//* hint
//? Days = 24*60*60*1000

const calculateDaysBetweenDates = (date1, date2) => {
    let currDate1 = new Date(date1)
    let currDate2 = new Date(date2);

    let diff = Math.abs(currDate2 - currDate1);
    return diff / (24 * 60 * 60 * 1000)


}
console.log(calculateDaysBetweenDates("2024-04-01", "2024-04-30"));