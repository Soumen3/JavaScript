const myNumbers=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNumbers.map((num)=>num+10)
// console.log(newNums);


const new_nums=myNumbers
                        .map((num)=>num*10)     //[10,20,30,40,50,60,70,80,90,100]
                        .map((num)=>num+1)      //[11,21,31,41,51,61,71,81,91,101]
                        .filter((num)=> num > 40)   //return the values thoes are greater than 40
console.log(new_nums);
