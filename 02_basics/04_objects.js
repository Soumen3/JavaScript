

const tinderUSer={}
tinderUSer.id="123abc"
tinderUSer.name="John Doe"
tinderUSer.age=25
tinderUSer.gender='male'
tinderUSer.location="New York, NY"
tinderUSer.bio="I love to travel and explore new places."

console.log(tinderUSer);
console.log(Object.keys(tinderUSer));
console.log(Object.values(tinderUSer));
console.log(tinderUSer.hasOwnProperty('gender'));
console.log(tinderUSer.hasOwnProperty('sex'));



const regularuser={
    email:"soumen@gmail.com",
    fullName:{
        userfullname:{
            firstName:'Soumen',
            lastName:'Samanta'
        }
    }
}

console.log(regularuser);
console.log(regularuser.fullName.userfullname);



const obj1={1:'a',2:'b'}
const obj2={3:'c', 4:'d'}

const obj3={obj1, obj2}
console.log(obj3);

const obj4=Object.assign({},obj1, obj2)
console.log(obj4);

const obj5={...obj1, ...obj2}
console.log(obj5);
