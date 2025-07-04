
// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
};

const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs.USD;
    const yen = euros * oneEuroIs.JPY;
    return yen;
};

const fromYenToPound = (yen) => {
    const euros = yen / oneEuroIs.JPY;
    const pound = euros * oneEuroIs.GBP;
    return pound;
};

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};