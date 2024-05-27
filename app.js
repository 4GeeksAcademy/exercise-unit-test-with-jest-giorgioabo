const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = { sum };

let oneEuroIs = {
    "JPY": 156.5, 
    "USD": 1.07,
    "GBP": 0.87, 
}

const fromEuroToDollar =  (a) =>{
    let total = a * 1.07;
    return total
}
console.log(fromEuroToDollar(3.5));

const fromDollarToYen = (valueYen) => {
    let dollartoYen = valueYen * 156.5 / oneEuroIs.USD;
    return dollartoYen;
}

console.log(fromDollarToYen(1));

const fromYenToPound = (valuePoun) => {
    let yenToPound = valuePoun * 0.87 / oneEuroIs.JPY;
    return yenToPound;
    
};
console.log(fromYenToPound(1));

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}