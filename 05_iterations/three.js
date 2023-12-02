// forof loop
const arr=[1,2,3,4,5]
for (const iterator of arr) {
    console.log(iterator);   
}

const greetine='Hello world'
for (const iterator of greetine) {
    console.log(`Each char is: ${iterator}`);
}




// Maps 

const map=new Map()
map.set('IN', "India")
map.set("USA", "United States of Amarica")
map.set("Fr", "France")

console.log(map);
for (const [key, Value] of map) {
    console.log(key,':-',Value);
}


