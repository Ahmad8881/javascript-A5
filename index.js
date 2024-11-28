
// What are objects in javascript?
// What are function?
// What is an event loop and call stack.
// What is the DOM?
// Difference between undefined vs not defined vs NaN
// What are arrow functions?
// What is the for-in loop in JavaScript? Give its syntax
// Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript
// What is difference between null and undefined and where to use what?
// Write code to explain map and filter in arrays
// Given an array of 0's and 1's find out number of 0's
// Given an array find out total no. of odd and even nos.
// Given a string find out number of vowels


// ans no. 1--  What are objects in javascript?


//  objects in JavaScript are collections of related information stored together in one place.
//  They use key-value pairs to store data, meaning each piece of information (the value) has a name (the key) you use to access it.

// Creating an Object
// Here's a basic example of an object:

// // export.----

// const person = {

//   name: "Alice",

//   age: 30,

//   isStudent: false

// };

// ---********************************************************************************************************************************----

//  ans no. 2 -- What are function?

// In JavaScript, a function is a reusable block of code designed to perform a specific task. 
// You can define a function once, then call (or "invoke") it whenever you need it in your program.

// Why Use Functions?
// Functions help you:

// Organize code into small, manageable pieces.
// Avoid repeating code by reusing the same function.
// Perform complex tasks by breaking them down into smaller steps.

//for creating function

// function greet() {

//     console.log("hello")

// }

//  for call function (invoke) simply write a name of function and parasynthesis 

// greet()

// ---********************************************************************************************************************************----


// Question 3 - what is an event loop and callstack.


// The call stack is a stack data structure that keeps track of the execution context of all the functions that are called in  program.
//  In other words, it stores information about what functions are currently being executed.
// How the Call Stack Works:
// When a function is invoked, a new "execution context" is created for that function and placed onto the top of the stack.
// When the function finishes executing, its execution context is popped off the stack, and control is returned to the function that was executing before it.


// ---********************************************************************************************************************************----


// ans no 4--- what is DOM?


// What is the DOM?
// The DOM (Document Object Model) is a structured representation of the content in a webpage. 
// It’s an interface provided by the browser that allows JavaScript to interact with the HTML and CSS of a page.

// for example:

// Change the text of an element with ID "myTitle"
// document.getElementById("myTitle").textContent = "New Title";


// ---********************************************************************************************************************************----

// question 5-----Difference between undefined vs not defined vs NaN



// Undefined:--- Undefined is a value returned when a variable is declared but not assigned.

//  EX :--

// let x;
// console.log(x); // Output: undefined

// Not Defined:--- is an error thrown when you try to access a variable that doesn't exist. 
// not define is basically Error massage

// EX :---
// If we print y without without store y in any variable it give error mssage 

// console.log(y); // Output: y is not defined

//NaN :---- NaN is a specific value indicating an invalid result from a mathematical operation.

// ex :---


// let result = parseInt("abc"); // Output: NaN


// ---********************************************************************************************************************************----

// question 6- What are arrow functions?


// What are arrow functions?
// In JavaScript, arrow functions are a shorter and more concise way to write functions.
// They are particularly useful for simplifying function syntax, especially for small or one-line functions.

// */
// //ex-
// const sayHello = name => "Hello, " + name;
// console.log(sayHello("Sonal")); // Output: Hello, Sonal

// ---********************************************************************************************************************************----

// Q No. 7 ---What is the for-in loop in JavaScript? Give its syntax

// The for...in loop in JavaScript is used to iterate over the properties (keys) of an object. It allows you to go through each property 
// in an object one by one. This loop is particularly useful when you want to inspect or work with all keys and their associated values within 
// an object.

// //ex-
// const person = {
//     name: "Ahmad",
//     age: 21,
//     city: "AGra"
//   };
  
//   for (let key in person1) {
//     console.log(key + ": " + person[key]);
//   }
// ---********************************************************************************************************************************----



// question no 8----  Explain Local Scope, Block Scope, Functional Scope and Scope Chain in javascript
// local scope - Local scope refers to variables that are defined within a specific context (such as a function or a block) and are only accessible inside that context.
//for example - function example() {
//     let x = 10; // Local variable inside the function
//     console.log(x); // Accessible here
// //}

// example();
// console.log(x); // Error: x is not defined outside the function

//Functional Scope -If a variable is declared inside a function, it is only accessible within that function.
// function test() {
//     var a = 5; // Function-scoped variable
//     if (true) {
//         var b = 10; // This will be scoped to the entire function, not just the if block
//     }
//     console.log(a, b); // Works fine, b is available here
// }

// test();
// console.log(b); // Error: b is not defined outside the function

//Block  Scope: Block scope refers to variables that are declared inside a block (e.g., inside {}) and are only accessible within that block.
//  Variables declared using let and const are block-scoped, unlike var, which is function-scoped.

//chain scope : The scope chain is essentially a hierarchy of scopes that JavaScript uses to look up variables. When you access a variable, JavaScript 
// looks at the current scope, then moves outward to the outer scopes, and eventually reaches the global scope if necessary.




// ---********************************************************************************************************************************----

// answer number 9 --

// What is difference between null and undefined and where to use what?

// undefined is a special value that JavaScript automatically assigns to variables that have been declared but have not yet been given a value. 
// It’s JavaScript’s way of saying, “This variable exists, but it doesn’t have a value yet.”

// Use null when you want to intentionally indicate that a variable should be empty, have no value, or represent “nothing.”


// let l;               
// console.log(l); output : undefined



// let r = null;        
// console.log(r);  output : null


// ---*******************************************************************************************************************************************----

// question 10---Write code to explain map and filter in arrays

// The map() method creates a new array by applying a function to each element of the original array. It doesn't modify the original array but returns a 
// new one with the modified elements.

// Example:
// Let's say we have an array of numbers, and we want to double each number.

// const numbers = [1, 2, 3, 4, 5];

// Using map to double each number
// const doubledNumbers = numbers.map((num) => num * 2);

// console.log(doubledNumbers); 

// filter()

// The filter() method creates a new array with all elements that pass a test (provided as a function). Like map, it doesn't modify the original 
// array but returns a new one with only the elements that meet the condition.

// Example:
// Using the same numbers array, let’s filter out only the even numbers.



// const numbers = [1, 2, 3, 4, 5];

// Using filter to get even numbers
// const evenNumbers = numbers.filter((num) => num % 2 === 0);

// console.log(evenNumbers); 


// ---*******************************************************************************************************************************************----

// ans  11----

// let arr = [1, 1, 0, 1, 0, 0, 0, 1, 0]

// let count =0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//         count++

//     }

// }
// console.log(count)


// initialize arr with a series of 1s and 0s.


// let arr = [1, 1, 0, 1, 0, 0, 0, 1, 0];

// initialize a variable count to keep track of how many 0s are in the array.

// let count = 0;


// use a for loop to go through each element in the array arr:

// for (let i = 0; i < arr.length; i++) {
// Inside the loop, we check if the current element (arr[i]) is 0:

// if (arr[i] === 0) {
//     count++;
// }
// If it is, increment count by 1. This way, each time the loop finds a 0, it adds 1 to count.

// Finally, after the loop finishes, print the value of count, which shows the total number of 0s in arr:


// ---********************************************************************************************************************************----

// ans 12----- Given an array find out total no. of odd and even nos.

// let arr1= [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let evenCount=0;
// let oddCount=0;

// function find() {

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] % 2 ===0) {
//             evenCount++

//         }else{

//             oddCount++
//         }

//     }
//     console.log("even = " + evenCount)
//     console.log("Odd = " + oddCount)
// }
// find();


// initialize arr.


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// initialize a variable evencount to keep track of how many 0s are in the array.

// let evenCount = 0;

// initialize a variable OddCount to keep track of how many 0s are in the array.

// let  OddCount = 0;


// use a for loop to go through each element in the array arr:

// for (let i = 0; i < arr.length; i++) {
// Inside the loop, we check if the current element (arr[i]) is devided by 2  is zero :

// if (arr1[i] % 2 ===0) {
//     evencount++;
// }
// If it is, increment count by 1. This way, each time the loop finds an element of array devided by 2 and the remainder we gat is zero,
//  it adds 1 to evenCount.

// Finally, after the loop finishes, print the value of evencount and oddcount, which shows the total number of even and odd in arr:



// ---********************************************************************************************************************************----

// Ans 13----Given a string find out number of vowels


// let str = "hello world";
// let vowels = "aeiouAEIOU";
// let count = 0;

// for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//         count++;
//     }
// }

// console.log(count);  


// ---********************************************************************************************************************************----