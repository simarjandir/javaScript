// Date

//let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log("ISO = "+ myDate.toISOString());
// console.log("JSON = "+ myDate.toJSON());
// console.log("LOCALE DATE = "+ myDate.toLocaleDateString());
// console.log("UTC = "+ myDate.toUTCString());

//const myCreatedDate= Date("2023-01-23");
//const myCreatedDate= Date("01-14-2013");
//console.log(myCreatedDate);

// let myCreatedDate = Date.now();
// console.log(myCreatedDate);   // date in miliseconds

// console.log(Math.floor(Date.now()/1000));  // gives date in seconds

let newDate= new Date();
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getFullYear());

newDate.toLocaleString('default',{
    weekday : "long"
})
