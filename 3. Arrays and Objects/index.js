/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// DONE 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
console.log(numbers[0],numbers[4],numbers[numbers.length-1])
// DONE 3.2 calculate the min, max, and the average of the numbers array
// Your code here
console.log(Math.min(...numbers))
console.log(Math.max(...numbers))
let sum=0
for(const x of numbers){
    sum+=x
}
console.log(sum/numbers.length)
// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: Lists in Python and Arrays in JS are similar in functionality as it can hold multiple data types in a single list or array.

// DONE 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
const IT114L={
    courseCode:"IT114L",
    courseName:"Web Systems and Technologies Laboratory",
    units:1,
    studentsNum:40
}
// DONE 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here,
IT114L.professor="Job Lipat"
console.log(IT114L.professor)
// DONE 3.5 Declare an array of objects with information about the courses you are taking this term
// Your code here
const term=[
    {
        courseCode:"CS107",
        courseName:"Information Management",
        units:2,
    },
    {
        courseCode:"CS107L",
        courseName:"Information Management Laboratory",
        units:1,
    },
    {
        courseCode:"HUM039",
        courseName:"Ethics",
        units:3,
    },
    {
        courseCode:"IT114",
        courseName:"Web Systems and Technologies",
        units:2,
    },
    {
        courseCode:"IT114L",
        courseName:"Web Systems and Technologies Laboratory",
        units:1,
    },
    {
        courseCode:"IT132",
        courseName:"Logic Design and Switching Theory",
        units:2,
    },
    {
        courseCode:"IT132L",
        courseName:"Logic Design and Switching Theory Laboratory",
        units:1,
    },
    {
        courseCode:"IT133",
        courseName:"Technopreneurship",
        units:3,
    }
]
// DONE 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
let totalUnits=0
term.forEach(y=>{
    totalUnits+=y.units
})
console.log(totalUnits)
// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: Dictionaries are the equivalent of objects. Both has the same functionalities but with different syntax.
// Example of this is the methods used. Python uses keys() while JS uses Object.keys()

// DONE 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
const num=23
const numbersNew=[...numbers,num]
console.log(numbersNew)
// DONE 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
const {courseCode,units,...rest}=IT114L;
console.log(courseCode,units)

export{numbers};