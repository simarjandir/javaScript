const mySym=Symbol("key1");
const jsUser={
    name : "Simarjit",
    "full name" : "Simarjit Singh",
    [mySym] : "mykey1",
    age : 38,
    location : "Jalandhar",
    email : "abc@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Wednesday"]
}
// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// jsUser.email="abc@gmail.com";
// console.log(jsUser.email);

// Object.freeze(jsUser); // now object cannot be changed
// jsUser.email="dsdfsd@gmail.com";  // no effect
// console.log(jsUser.email);

jsUser.greeting=function(){
    console.log("hello js user");
}
jsUser.greeting2=function(){
    console.log(`hello js user ${this["full name"]}`);
}
jsUser.greeting();
jsUser.greeting2();

