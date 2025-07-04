// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});

test("Cien dólares deberían ser aproximadamente 14626.10 yenes", function() {
    // Definimos la cantidad de dólares a convertir
    const dollarsToConvert = 100;
    // Llamamos a la función para obtener el resultado
    const yen = fromDollarToYen(dollarsToConvert);

    // Calculamos el valor esperado:
    // 1 USD = (1 / 1.07) EUR
    // 1 EUR = 156.5 JPY
    // Entonces, 100 USD = (100 / 1.07) EUR * 156.5 JPY/EUR
    const expected = (dollarsToConvert / 1.07) * 156.5;

    // Hacemos la comparación. Usamos toBeCloseTo por la precisión de los decimales.
    expect(yen).toBeCloseTo(expected);
});


test("Quinientos yenes deberían ser aproximadamente 2.78 libras", function() {
    // Definimos la cantidad de yenes a convertir
    const yenToConvert = 500;
    // Llamamos a la función para obtener el resultado
    const pound = fromYenToPound(yenToConvert);

    // Calculamos el valor esperado:
    // 1 JPY = (1 / 156.5) EUR
    // 1 EUR = 0.87 GBP
    // Entonces, 500 JPY = (500 / 156.5) EUR * 0.87 GBP/EUR
    const expected = (yenToConvert / 156.5) * 0.87;

    // Hacemos la comparación. Usamos toBeCloseTo por la precisión de los decimales.
    expect(pound).toBeCloseTo(expected);
    expect(pound).toBeCloseTo(2.77955); // Valor directo para verificación
});