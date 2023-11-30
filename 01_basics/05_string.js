const name="Priya"
const repoCount=50

// console.log(name + repoCount + 'Value');             // It is not a good method

console.log(`Hello, her name is ${name}. Her repo count is ${repoCount}`); 
// This is the best way to concatenate strings in JavaScript



const game=new String("clash_of_clans")     // best way to define a string
console.log(game.length);
console.log(game.toUpperCase());
console.log(game.charAt(2));
console.log(game.indexOf('s'));

const newString=game.substring(0,5)
console.log(newString);

const anotherString=game.slice(-5,14)
console.log(anotherString);

const newStringone="       Soumen       "
console.log(newStringone);
console.log(newStringone.trim());

const url="https://soumen.com/about%20education"
console.log(url.replace('%20','-'));

console.log(url.includes('profile'));


console.log(game.split('_'));
