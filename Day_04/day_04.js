//? Write a function called checkTriangleType that take three parameter representing the length of side of triangle. The function should return indicating the of triangle : "equilateral", "isosceles","scalene"

//? if all three side are equal length return "equilaterals".
//? if only two side are equal length return "isosceles"
//? if all three side have diff length return "scalene"

const checkTriangleType = ((a, b, c) => {
    if (a === b && b === c) {
        return "equilaterals"
    }
    if (a === b || b === c || a === c) {
        return "isosceles"
    }
    return "scalene";
});

console.log(checkTriangleType(3, 3, 3));
console.log(checkTriangleType(1, 3, 3));
console.log(checkTriangleType(2, 1, 3));

