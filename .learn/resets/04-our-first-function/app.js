// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollars) {
    const euros = dollars / oneEuroIs.USD;
    const yen = euros * oneEuroIs.JPY;
    return yen;
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}

function fromYenToPound(yen) {
    const euros = yen / oneEuroIs.JPY;
    const pound = euros * oneEuroIs.GBP;
    return pound;
}

module.exports = { sum, fromEuroToDollar};