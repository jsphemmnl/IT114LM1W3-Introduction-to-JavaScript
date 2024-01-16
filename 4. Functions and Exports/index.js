/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// DONE 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
function greet(name){
    console.log("Hello "+name)
}
greet("EJ")

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: Function declaration is defining method with specified functionalities
// Function Expression is making a function possible to be a variable

// DONE 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
function calculateArea(length,width){
    return length*width
}
calculateArea(4,6)

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: Function callback is a function call where a function is passed onto another function call as an argument
const ex=[1,2,3]
const sq=ex.map(num=>num*num)

// DONE 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here
import {numbers} from "../3. Arrays and Objects/index.js"
function modifyArray(array, callbackFunction) {
    for (let x in array) {
        array[x] = callbackFunction(array[x])
    }
}

function increment(integer) {
    return integer + 1;
}

modifyArray(numbers, increment);

console.log(numbers);

// DONE 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
import{add,PI} from "./mathUtils.js"
console.log(add(4,7),PI)

// DONE 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
import isPalindrome from "./isPalindrome.js"
console.log(isPalindrome("neveroddoreven"))

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer:  The require function and module.exports variable are keywords for importing and exporting modules 
// The require function and module.exports are good for older Javascript projects while import and export are recommended for newer development.
