//if
// const isUserLoggedIn=true;
// const temrature=40;
// if(isUserLoggedIn){}
// if(temrature<50){
//     console.log("normal");
// } else{
//     console.log("hot");
// }

// let balance=1000;
// if(balance<400){
//     console.log(`Balance is less than 400`);
// }else if(balance<500){
//     console.log(`Balance is less than 500`);
// } else if(balance<700){
//     console.log(`Balance is less than 700`);
// }else{
//     console.log(`Balance is ${balance}`);
// }

const userLoggedIn=true;
const debitCard=true;
let loggedInGoogle=true;
let loggedInEmail=false;
// if(userLoggedIn && debitCard){
//     console.log("Allow to buy course");
// }
if(loggedInEmail || loggedInGoogle){
    console.log("logged in");
}

// <,>,<=,>=,==,!=,===,!==