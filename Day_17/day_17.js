//? Write a function to convert a string to camelCase $ sanke_case.

const camelCase = (str) => {
    str = str.trim().split(" ");
    str = str.map((currentValue, index, arr) => {
        if (index === 0) {
            return currentValue.toLowerCase();
        } else {
            return currentValue.charAt(0).toUpperCase() + currentValue.slice(1).toLowerCase();
        }
    });
    return str.join("");

}

const sanke_case = (str) => {
    return str.split(" ").join("_").toLowerCase();
}

console.log(camelCase("hello world"));
console.log(sanke_case("learn javascript"));