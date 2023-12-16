const promiseOne= new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography
    setTimeout(function(){
        console.log("Async task complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise One resolved")
})




// ------------- Another Way------------- //

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolve");

})





const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username:"Chai", email:"chai@gmail.com"
        })
    },1000)
})

promiseThree.then(function(user){
    console.log(user);

})





const promiseFour =new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= false
        if(!error){
            resolve({username:"Chai", email:"chai@gmail.com"})
        }
        else{
            reject("somthing went wrong")
        }
    },1000)
})

promiseFour.then(function(user){
    console.log("User is "+ user.username + " and his Email is "+ user.email )
    return user.username
}).then(function(username){
    console.log("userName: "+username);    
}).catch(function(error){
    console.log(error);   
}).finally(function(){
    console.log("The promise os either resolved or rejected")
})







const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "JavaScript", email: "js@gmail.com" })
        }
        else {
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})

async function comsumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response);
    }catch (error){
        console.log(error);
        
    }
    
}
comsumePromiseFive()









async function getGitHubDetails(){

    try{
        const response=await fetch('https:api.github.com/users/soumen3')
        const data = await response.json()
        console.log(data);
        // console.log(response);
        
    }
    catch(error){
        console.log(`There was a problem with the fetch operation: ${error}`)
    }
}
getGitHubDetails()




// ----------------------- Another Way -----------------------------//
fetch('https:api.github.com/users/soumen3')
.then((response) => {
    return response.json()
})
.then ((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))