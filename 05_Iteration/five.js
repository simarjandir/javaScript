const coding=["c++","js","java","asp"];
// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach((val)=>{
//     console.log(val);
// })

// coding.forEach(printMe)
// function printMe(item){
//     console.log(item);
// }

// coding.forEach((item,index,arr) =>{
//     //console.log(`${item}   ${index}     ${arr}`);
//     //console.log(item , index, arr);
// })

const myCoding=[
    {
        language : "JavaScript",
        languageFile : "js"
    },
    {
        language : "Python",
        languageFile : "py"
    },
    {
        language : "Java Programming",
        languageFile : "java"
    }
];

myCoding.forEach((item) =>{
    console.log(item.language);
})
