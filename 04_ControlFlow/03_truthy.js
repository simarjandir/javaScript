const userEmail="s@gmail.com";
//const userEmail="";
//const userEmail=[];

if(userEmail){
    console.log("user has Email");
}else{
    console.log("Don't have E-Mail");
}

// falsy values

// false , 0, -0, BigInt 0n,"",null,undefined,NaN

// truthy values

// "0", 'false', " ",[],{}, function(){}


if(userEmail.length === 0){
    console.log("Array empty");
}
// const emptyObj={};
// if(Object.keys(emptyObj).length === 0){
//     console.log("empty obj");
// }

// Nullish Coalescing operator (??):   null undefined

let val1;
//val1= 4 ?? 0;
//val1 = null ?? 10
val1= undefined ?? 56;

console.log(val1);

