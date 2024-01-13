/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing
console.log(randomNumber)
// DONE 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
if (randomNumber>50){
    console.log("More than Fifty")
}
// DONE 2.2 Display whether the random number is odd or even
// Your code here
if (randomNumber%2===0){
    console.log("Even Number")
}
else{
    console.log("Odd Number")
}
// DONE 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here
if (randomNumber%3===0 && randomNumber%5===0){
    console.log("fizzbuzz")
}
else if (randomNumber%3===0){
    console.log("fizz")
}
else if (randomNumber%5===0){
    console.log("buzz")
}
// DONE 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
const toDisplay = randomNumber%2===0 ? "Even":"Odd";
console.log(toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: Switch statements are used by declaring cases and their specific functions.
// This statement will be useful if there are specific values that have different functions such as true or false with different outcomes.

// DONE 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here
let n1=1
let num=""
while(n1<=n){
    num +=n1+" "
    n1++
}
console.log(num)
const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
let n2=0
let list1=""
do {
    list1+=list[n2]+" "
    ++n2
} while (n2<list.length)
console.log(list1)
// Checkpoint 2.3 How would you simulate a do-while loop in JavaScript
// Answer:do{statement}while(condition)

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
list3=""
for(let x of list){
    list3+=x+" "
}
console.log(list3)
// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
list4=""
for(const y in list){
    list4+=y+" "
}
console.log(list4)

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
list.forEach(display);
function display(index,item){
    console.log(index, item)
}
// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: for of should be used in getting the values, for in should be used for getting the indeces, forEach should be used when getting both the indeces and values

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = Math.floor((Math.random() * 5)); // feel free to mock this value for testing
try{
    const quotient = numerator / denominator;
    if(denominator===0){
        throw Errpr("Division by Zero Error")
    }
    console.log(quotient)
}
catch(error){
    console.log("Error")
}
finally{
    console.log("Cleaning up Resources")
}


