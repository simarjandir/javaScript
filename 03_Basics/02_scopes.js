
//var c=300;
// let a=300;

// if(true){
//     let a=10;
//     const b=20;
//    // var c=30;
//    console.log(`inside of function a= ${a}`);

// }

// console.log(`outside of function a= ${a}`);
// console.log(b);
//console.log(c);

function one(){
    const userName="simarjit";
    function two(){
        const website="youtube";
        console.log(userName);
    }
    //console.log(website);
    two();
}
//one();

// if(true){
//     const userName="simarjit";
//     if(userName === "simarjit"){
//         const website="youtube";
//         console.log(userName + website);
//     }
//    // console.log(website);
// }
// //console.log(userName);


// ++++++++++++ interseting +++++++

//console.log(addOne(5));
function addOne(num){
    return num+1;
}

//console.log(addTwo(7));
const addTwo=function(num){
    return num+2;
}
console.log(addOne(5));
console.log(addTwo(7));