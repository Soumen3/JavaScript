// for each loop

const programming=['js', 'py', 'rb', 'cpp', 'c']


programming.forEach( function (item){
    console.log(item);
    
})


programming.forEach((item)=>{
    console.log(item); 
})

programming.forEach(printme)

function printme(item){
    console.log(item);
}


programming.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})




const myCoding=[
    {
        language:'Javascript',
        languageFile:'js'
    },
    {
        language:'Python',
        languageFile:'py'
    },
    {
        language:'Java',
        languageFile:'java'
    },
]
myCoding.forEach((item)=>{
    console.log(item.language);
    console.log(item.languageFile);  
})