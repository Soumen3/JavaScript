

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);
// }

function addTwoNumbers(number1, number2){
    return(number1+number2);
}
const result=addTwoNumbers(3, 5)
console.log(result);



function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage('soumen'))
console.log(loginUserMessage())






function calculateCartPrice(...num){
    return num
}

console.log(calculateCartPrice(400, 500, 600))