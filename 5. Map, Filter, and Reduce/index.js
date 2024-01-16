/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// DONE 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
let squares = numbers.map((number)=>number**2)
console.log(squares)

// DONE 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
let even=numbers.filter((number)=>number%2===0)
console.log(even)

// DONE 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
let sum=numbers.reduce((total,number)=>total+number)
console.log(sum)

// DONE 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
let uppercase=words.map((word)=>word.toUpperCase())
console.log(uppercase)

// DONE 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
let filterfour=words.filter((word)=>word.length>=4)
console.log(filterfour)

// DONE 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
let conc=words.reduce((conc,word)=>conc+=word)
console.log(conc)

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: Map performs the function with all of the elements
// Filter performs the function with specified elements based from the condition
// Reduce combines all the elements into a single element