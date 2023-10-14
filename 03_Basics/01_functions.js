function sayMyName(){
    console.log("H");
    console.log("E");
}
//sayMyName();

// function addTwo(num1,num2){
//     console.log(num1+num2);
// }
// function addTwo(num1,num2){
//     // let result= num1+num2;
//     // return result;
//     return num1+num2
// }
// //addTwo(6,7)
// let r=addTwo(6,8)
// console.log(r);

// function loginUserMsg(username){
//     if(!username){
//         console.log("entr user nam");
//         return
//     }
//     return `${username} logged in`;
// }
// let result=loginUserMsg("Simarjit");
// console.log(result);

function calculateCartPrice(...price){    // here ... is rest perator
    return price
}
// console.log(calculateCartPrice(43,56,87));
// console.log(calculateCartPrice(25));

// function calculateCartPrice2(val1,val2, ...rate){    
//     return rate;
// }
// console.log(calculateCartPrice2(150,250,43,56,87));
/* 150 to val1, 250 to val2, others to rate array */

// const user ={
//     uname : "simarjit",
//     price : "500"
// }

// function handleObject(anyObject){
//     console.log(`User name is ${anyObject.uname} and price is ${anyObject.price}`);


// }
// handleObject(user);
// handleObject({
//     uname:"ss",
//      price:76
//     });

const myNewArray=[450,420,375,360,540];
function returnSecondValue(anyArray){
    return anyArray[1];
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([145,452,254,789]));