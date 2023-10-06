const heros= ["thor", "ironman", "soiderman"];
const dcHeros=["superman","flash","batman"]
// combine arrays

// method 1
// heros.push(dcHeros); // not used
// console.log(heros);
// console.log(heros[3][1]);

// method 2

// let newHeros=heros.concat(dcHeros)
// console.log(heros);
// console.log(dcHeros);
// console.log(newHeros);

// method 3

// const allHeros=[...dcHeros,...heros];    // mostltly used ... spread operator
// console.log(allHeros);

// ************************* //

// let anotherArray=[1,2,3,[4,5,6], 7,[8,[9,7,8]]];
// let real_anotherArray=anotherArray.flat(3);
// let real_anotherArray2=anotherArray.flat(2);
// console.log(real_anotherArray);
// console.log(real_anotherArray2);

//console.log(Array.isArray(heros));

//console.log(Array.from("Simarjit Singh"));
// let myObj={
//     id :1,
//     name : "Simarjit Singh"
// };
// console.log(Array.from(myObj.name));


let score1=100;
let score2=200;
let score3=300;
//console.log(Array.of(score1,score2,score3));
const scoreArray=Array.of(score1,score2,score3);
console.log(scoreArray);
