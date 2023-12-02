const myNumbers=[1,2,3,4,5,6,7,8,9,10]


const myTotal =myNumbers.reduce(function (acc,currValue){
    console.log(`acc: ${acc}, curr:${currValue}`);
    
    return acc+currValue
},0)

console.log(myTotal);
