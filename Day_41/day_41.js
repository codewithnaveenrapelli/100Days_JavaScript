//? Write a function to convert an amount from one currency to another using static exchange rates.

//Requirement.

//? Write a function called convertCurrency that takes three parameters: amount. fromCurrency and toCurrency.

// Use a fixed object to store exchange rates relative to base currency
// The function should return the converted amount in the target currency.
// Handle Conversion through USD as a base, Meaning if converting from GBP to EUR, first convert GBP to USD, then USD to EUR.


// USD 1 : 0.9
//     ? : 100

// USD 1 : 0.9
// 100 : ?

const rates = {
    USD: 1, // Base currency
    EUR: 0.9, // 1 USD: 0.9 EUR
    GBP: 0.8, // 1 USD: 0.8 GDP
    INR: 82 // 1 USD : 82INR
}

const convertCurrency = (amount, fromCurrency, toCurrency) => {
    let amountInUSD = 0;
    if (fromCurrency !== "USD") {
        amountInUSD = amount / rates[fromCurrency];
    } else {
        amountInUSD = amount;
    }

    let convertedAmount = 0;
    if (toCurrency !== "USD") {
        convertedAmount = amountInUSD * rates[toCurrency]
    } else {
        convertedAmount = amountInUSD;
    }

    return convertedAmount;
}
console.log(convertCurrency(100, "INR", "EUR"));
