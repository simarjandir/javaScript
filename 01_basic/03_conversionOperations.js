let score=3;
let score1="33"
let score2="33abc"

console.log(typeof score);
console.log(typeof(score1));
console.log(typeof score2);

let valueInNumber = Number(score1)
let valueInNumber2=Number(score2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

console.log('-------------------------------');
let nullValue=null;
let undefinedValue  = undefined;
let booleanValue = true;
console.log(typeof nullValue);
console.log(typeof undefinedValue);
console.log(typeof booleanValue);


// "33" => 33
// "33abc" => NaN
// true =>1   false => 0

console.log("----------------------------");

let isLoggedIn =0;
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);

// 1 => true     0=> false
//""  => false
//"Simarjit"  => true


console.log("-----------------------");

let someNumber =33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);