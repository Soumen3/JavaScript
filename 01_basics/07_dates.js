// Dates 

let myDate=new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate);


let myCreatedDate=new Date(2002, 5, 20)
console.log(myCreatedDate.toLocaleString());

let timeStamp=Date.now()
console.log(timeStamp);
console.log(Math.floor(timeStamp/1000));


let newDate=new Date()

