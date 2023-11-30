const score = 400


const balance = new Number(9999999999999.94999)
console.log(balance);
console.log(typeof balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));

const otherNumber = 23.983749
console.log(otherNumber.toPrecision(2));
console.log(typeof otherNumber)

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN'));




// ===================== Maths ======================= //

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.random());
console.log(Math.random() * 10);
console.log((Math.random() * 10) + 1);


const min=10
const max=50

console.log(Math.floor(Math.random() * ((max-min)+1))+min);
