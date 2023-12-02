// Immidiately Invoked Function Expressions (IIFE)

// iife is used to avoid the polution of global variables

(function chai(){
    //named iife
    console.log(`DB connected.`);
    
})();       // ; must in the iife otherwise compiler will confuse where the program should stop and return error 


((name)=>{
    //unnamed iffe
    console.log(`Db connected to ${name}`);
})('Soumen')