/*
 Primitive
 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
*/

const score = 30
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol("123")         // Returns an unique value
const anotherId = Symbol("123")

console.log(id == anotherId);     // false

const bigNumber = 1234578987654653457546554n
console.log(bigNumber);
console.log(typeof bigNumber);





/*
 Reference (Non-primitive)
 Array, Objects, Functions
*/

const cars = ['rolls royes', 'farari', 'BMW', 'ducati', 'lamborgini']
const myObj = {
    name: "Soumen",
    age: 21,
}

const myFunction=function(){
    console.log("hey coder");
}
myFunction()
console.log(typeof cars);
console.log(typeof myObj);
console.log(typeof myFunction);








// ------------------------------------------------------------------------------------------- //

// Stack (Primitive data),   Heap(Non-primitive data)
let myName="Soumen Samanta"
let myACccName=myName
myACccName="Programmer"

console.log(myName);
console.log(myACccName);



let user={
    email:"soumen@google.com",
    upi:'soumen@paytm',
}

let modifiedUser=user
modifiedUser.email="soumen@netflix.com"
console.log(user.email);
console.log(modifiedUser.email);