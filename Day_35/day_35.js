//? Check object isEmptyObject

//? Write a function isEmptyObject that takes an object as input and determine whether it is empty or not. An empty object is defined as an object with no own properties

//? implement the isEmptyObject function using javascript and return a message indicating weather the object is empty or not.

//* constrains:


const isEmptyObject = (obj) => {
    // return obj === 0 ? `it's empty` : `it's not empty`
    // for (let key in obj) {
    //     if (obj.hasOwnProperty(key)) {
    //         return `it's not empty`
    //     }
    // }
    // return `it's empty`

    return Object.keys(obj).length === 0;
}
console.log(isEmptyObject({ name: 'naveen' }));
console.log(isEmptyObject({}));
console.log(isEmptyObject({ name: 'naveen' }));
