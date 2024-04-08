//? Write a function that take a string as input and return the count of vowels in that string. consider 'a','e','i','o','u' vowels.
//? (both in lowercase and uppercase)


const vowels = (str) => {
    let arr = ['a', 'e', 'i', 'o', 'u'];

    let vow = str.split('');
    let count = 0;
    for (let char of vow) {
        if (arr.includes(char.toLowerCase())) {
            count++;
        }
    }
    return count;

}

console.log(vowels("hello world"));