const santani_gods=['Shiva', 'Vishnu', "Bramha", 'Ganesh', 'Kartik', 'Indra']
const avatars=['Hanuman', 'parshu ram', 'Krishna', 'Ram', 'lakshman']


// santani_gods.push(avatars)
// console.log(santani_gods);

const allGods=santani_gods.concat(avatars)
console.log(allGods);


// Sprade operator
const Gods=[...santani_gods, ...avatars]
console.log(Gods);



const another_array=[1,2,3,[4,5,6],7,[8,9],[10,[11,12,12],14]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Soumen"));
console.log(Array.from("Soumen"));


let score1=300
let score2=200
let score3=100
console.log(Array.of(score1,score2, score3));



