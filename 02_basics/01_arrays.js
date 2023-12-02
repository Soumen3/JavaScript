let myArr=[0,1,2,3,4,5]
console.log(`array is ${myArr}`);
console.log(`type of array is ${typeof myArr}`);

let newArray= Array(1,2,3,4,5)
console.log(`new array is ${newArray}`)
console.log(`type of new array is ${typeof newArray}`);



myArr.push(6)
console.log(myArr);
myArr.pop()
console.log(myArr);


myArr.unshift(9)
console.log(myArr);
myArr.shift()
console.log(myArr);

console.log(myArr.includes(3));
console.log(myArr.indexOf(4));
console.log(myArr.indexOf(98));


const newArr=myArr.join();
console.log('joined arr',newArr);
console.log(`type of new element is: ${typeof newArr}`)


//slice, splice

console.log("A", myArr);

const myn1=myArr.slice(1,3)
console.log(myn1);


console.log("B", myArr);

const myn2=myArr.splice(1,3)
console.log(myArr);
console.log(myn2);

