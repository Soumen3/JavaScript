const user={
    userName:'soumen',
    price:999,

    welcomeMessage: function(){
        console.log(`${this.userName}, wlecome to website`)
        console.log(this);
        
    }
    
}
user.welcomeMessage()

user.userName='sam'
user.welcomeMessage()

console.log(this);


// this keyword is used in the context of an object



function chai(){
    console.log(this);  
}
chai()


const tea=()=>{
    console.log(this);
    
}
tea()


const addTwo=(num1, num2)=>{
    return num1+num2                //explicit return
}

console.log(addTwo(3,2));



const add=(num1, num2)=>num1+num2       // implicit return

console.log(add(3,2));


