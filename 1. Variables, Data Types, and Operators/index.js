/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/
// DONE 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var x=1
console.log(x)

// DONE 1.2 Use the let keyword to define a variable.
// Your code here
let y=2
console.log(y)

// DONE 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const sample=3
console.log(sample)
sample.x=sample
console.log(sample.x)

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: The functions "var" and "let" declares values that can be changed while the value of "const" cannot be changed in any way. 
// The difference of "var" and "let" is the availability in the code as the value of "var" can be accessed globally while "let" are block-intended values.

// DONE 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
let modulo=7
let value=20
a = value%modulo
console.log(a)

let expo=4
b=2**expo
console.log(b)

c=1+8
d=10-3
e=6*5
f=4/16
console.log(c+" "+d+" "+e+" "+f)
// Checkpoint 1.2 What operators did you use?
// Answer: Modulo (%), Exponential (**), Basic Operations
// Your code here

// DONE 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
let samplestring="Hello "
console.log(samplestring)

samplestring += "World"
console.log(samplestring)

// Checkpoint 1.3 What operators did you use?
// Answer: Concatinate of strings (+=)

// DONE 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
const l1=true&&false
const l2=true&&true
const l3=false||false
const l4=true||false
const l5=!true
console.log(l1,l2,l3,l4,l5)

// Checkpoint 1.4 What operators did you use?
// Answer: Logical AND (&&), Logical OR(||), Logical NOT(!)


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
const money=["1","5","10","20","50","100","200","500","1000"]
const formula={team:"Ferrari",car:"SF-23",driver1:"Leclerc",driver2:"Sainz",tp:"Vasseur"}
r1=5 in money;
r2="25" in money;

r3="driver" in formula;
r4="team" in formula;
console.log(r1,r2)
console.log(r3,r4)

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: It evaluates to true as the the function [] is converted to 0 which is false in boolean. When compared to the boolean false, it will be identical within each other, making the statement true.
// Your code here
const r5=[]==false
console.log(r5)