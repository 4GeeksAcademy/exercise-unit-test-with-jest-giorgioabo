const {sum} = require ('./app.js');
// Comienza la primera prueba
test ('adds 14+9 to equal', () => {
    let total = sum (14, 9);

expect(total).toBe(23);
});

const {fromEuroToDollar} = require ('./app.js');

test ('resultado de Euros a dolares', ()=> {
    let result = fromEuroToDollar(3.5);
expect(result).toBe(3.745)
});

const {fromDollarToYen} = require ('./app.js');
test('resultado de Dolares to Yen', () => {
    let dolarToYen = fromDollarToYen (1);
expect(dolarToYen).toBe(146.26168224299064);
});

const {fromYenToPound} = require ('./app.js');
test('resultado de Yen to Pound', () => {
    let yenToPound = fromYenToPound (1);
expect(yenToPound).toBe(0.005559105431309904);
});