//? write a function called numberRangeRecursive that generates an array containing consecutive numbers from a to b.

//input
// a: An integer representing the starting number of the range.
// b: An integer representing the ending number of the range.
// arr: An optional paramter representing the array to store the number in the range. it default to an empty array.

//output 
//? An array containing consecutive numbers from a to b

const numberRangeRecursive = (a, b, arr = []) => {
    // let arr = [];
    // for (let i = a; i <= b; i++) {
    //     arr.push(i);
    // }
    // return arr;

    if (a <= b) {
        arr.push(a)
        return numberRangeRecursive(a + 1, b, arr)
    }
    return arr;
}

console.log(numberRangeRecursive(0, 5));
console.log(numberRangeRecursive(3, 7));
console.log(numberRangeRecursive(-2, 2));