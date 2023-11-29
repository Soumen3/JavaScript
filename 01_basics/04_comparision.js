

console.log("2">1);
console.log("02" > 1);

console.log(null > 0);      // false
console.log(null == 0);     // false
console.log(null >= 0);     // true

/*
The reason i that an equiliy check == and comparision > < >= <= works differenly.
Comparision convert null to a umber, treating it as 0.
That's why (3) null >=0 i true and (1) null > 0 is false.
*/



console.log(undefined > 0);      // false
console.log(undefined == 0);     // false
console.log(undefined >= 0);     // false




// ===      Strict check

console.log("2"===2);      // false      checks the data type also