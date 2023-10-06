const myArray= [1,2,3,4,5];
console.log(myArray);
// const myArray2=new Array(1,2,3,4,5);
// console.log(myArray2);

// Array methods

// myArray.push(6);
// console.log(myArray);
// myArray.pop();
// myArray.unshift(9);
// console.log(myArray);
// myArray.shift();
//console.log(myArray.includes(5));
//console.log(myArray.indexOf(4));
//console.log(myArray.indexOf(56));

//const newArray=myArray.join();

// Slice vs Splice

const myn1= myArray.slice(1,3);
console.log("A" + myArray);
console.log("B "+ myn1);

const myn2=myArray.splice(1,3);
console.log("C "+ myn2);
console.log("A "+ myArray);
//console.log(newArray);
