// for in loops

const myObject={
    js:"JavaScript",
    py:"Python",
    cpp:"C++",
    java:"Java",
    php:"PHP",
    c:"C",
}

for (const key in myObject) {
    console.log(`key: ${key}, value: ${myObject[key]}`);
}


const programming=['js', 'py', 'rb', 'cpp', 'c']
for (const i in programming) {
    console.log(programming[i]);
}