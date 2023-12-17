const user={
    username:"Soumen",
    loginCount:8,
    SignedIn:true,

    getUserDetails: function(){
        console.log("Got User Details from Database");
        
    }
}

console.log(user.username);

user.getUserDetails()







function User(username, logincount, isLoggedIn){
    this.username=username;
    this.loginCount = logincount;
    this.SignedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User('soumen', 10, true)
const userTwo = new  User('chaiaurcode', 13, false)
console.log(userOne);
console.log(userTwo);

userOne.greeting()
userTwo.greeting()