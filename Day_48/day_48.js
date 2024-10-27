// validate hex color code

// write a regular expression to validate a hex color (#a2c113)

// Requirement

// The hex color code should start with "#".
// it should be followed by either 3 or 6 hexadecimal characters.

// use case
// validating color code in design tool.
// ensuring consistent color code format in css
// filtering valid hex color code in data processing

const validateHexColor = (hexColor) => {
    return /^#([A-Fa-f\d]{3}|[A-Fa-f\d]{6})$/.test(hexColor);
}


console.log(validateHexColor("#a3c113"));
console.log(validateHexColor("fff"));
console.log(validateHexColor("#123456"));
console.log(validateHexColor("#123456"));