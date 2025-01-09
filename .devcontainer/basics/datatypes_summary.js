// Every time datatypes is divided into two on the basis of they are store in the memory

// Primitive(callByValue - so they are actual memory address is not given insted of their original value is given)

// 7 types  : Sring , Number ,Boolean ,null , undefined, Symbol,
// BigInt

// JavaScript is Dynamically typed 

// Refernce (Non Primitive - memory values are referred )

// Array ,Objects,Functions
const id = Symbol("123")

const AnotherId = Symbol("123")

console.log(id)
console.log(AnotherId)
console.log(id === AnotherId)
// === checks both datatypes are equal or not 

const heroes = ["Marvel","Strange","spiderman"];

let myobj = {
    name:"Shubh",
    age: 22
}

const myFunction = function(){
    console.log("Hello World");
}

