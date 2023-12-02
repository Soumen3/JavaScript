
//create object using object literals

const mySym=Symbol('Key1')

const jsUser={
    name:'John',
    age:30,
    city:'New York',
    email:"john@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday", "Saturday"],
    [mySym]:"Symbol value",                 // iy you want to add a symbol data type variable as a key, you have to write in a [].
}


console.log(jsUser.email);          // if write a key as a string ("") you can't accass the key-value using . operator
console.log(jsUser['email']);

console.log(jsUser[mySym]);     // and you have to write the key in the square brackets.



jsUser.greeting=function(){
    console.log(`Hello ${this.name}`);
}
jsUser.greeting();



jsUser.age=21
Object.freeze(jsUser)
jsUser.age=22           //object has freezed, so no change will effect the object
console.log(jsUser);
