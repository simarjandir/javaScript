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

function loginUserMsg(username){
    if(!username){
        console.log("entr user nam");
        return
    }
    return `${username} logged in`;
}
let result=loginUserMsg("Simarjit");
console.log(result);