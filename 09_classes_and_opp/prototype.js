let myName="Soumen     "
let lName="Samanta     "


String.prototype.truelength = function(){
    return this.trim().length
}

console.log(myName.truelength());



let heros =['thor', 'spiderman']

let heroPower ={
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.soumen=function(){
    console.log(`Soumen is present in all objects`)    
}

Array.prototype.HeySoumen= function(){
    console.log(`Soumen says hello`)
}

heroPower.soumen()
heros.soumen()

heros.HeySoumen()
// heroPower.HeySoumen()









// ----------Inheritance---------- //

const User = {
    name: "chai",
    email: "chai@google.co",

}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport ={
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__: TeachingSupport,
}

Teacher.__proto__=User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)



console.log("Soumen Samanta".truelength());