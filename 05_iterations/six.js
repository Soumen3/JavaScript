
// const programming=['js', 'py', 'rb', 'cpp', 'c']

// const value=programming.forEach((items)=>{
//     console.log(items);
//     return items
// })
// console.log(value);




// const nums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=nums.filter((num)=>{
//     return num>4        // return those numbers that is bigger than 4
// })
// console.log(newNums);



const books = [
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    publish: "1925",
    edition: "1st",
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publish: "1960",
    edition: "1st",
  },
  {
    title: "1984",
    genre: "Fiction",
    publish: "1949",
    edition: "1st",
  },
  {
    title: "The Catcher in the Rye",
    genre: "Fiction",
    publish: "1951",
    edition: "1st",
  },
  {
    title: "Pride and Prejudice",
    genre: "Fiction",
    publish: "1813",
    edition: "1st",
  },
  {
    title: "The Hobbit",
    genre: "Fantasy",
    publish: "1937",
    edition: "1st",
  },
  {
    title: "The Lord of the Rings",
    genre: "Fantasy",
    publish: "1954",
    edition: "1st",
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    genre: "Fantasy",
    publish: "1997",
    edition: "1st",
  },
];

const userBooks=books.filter((bk)=> bk.genre=='Fiction')
console.log(userBooks);
