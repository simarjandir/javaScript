// Primitive (they are call by value)
// 7 Types

// String, Number , Boolean, null, undefined, Symbol, BigInt

const score=10;
const scoreVal=9.8;
const isLoggedIn = false;
const tempVal= null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id);
// console.log(anotherId);
// console.log(id === anotherId);

const bigIntNumber = 645645745745745n;


// Reference Type (Non Primitive)

// array, Object, Functions

//Array
const heros = ["shaktimaan", "Aryaman", "Captain Vyom"];

// Objects

let info={
    name : "Simarjit Singh",
    age : 38
}

// Function

const myFunction= function(){
    console.log("inside function");
}

//console.log(typeof bigIntNumber);


// ################ Memory Type #########

// Stack (Primitive Type), Heap (Non Primitive)
// In case of Stack Memory we get a copy of Variable, change done in copy not original
// In case of Heap we get Reference => change will reflect in Actual

let myName = "Simarjit";
let anotherName = myName;
anotherName = "Singh";
console.log(myName);
console.log(anotherName);
