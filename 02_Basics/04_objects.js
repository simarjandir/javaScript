//const tinderUser=new Object();
const tinderUser={};
tinderUser.id="abc12";
tinderUser.name="Vansh";
tinderUser.isLoggedIn=false;
//console.log(tinderUser);

const anotherUser={
    email : "abc@gmail.com",
    fullName:{
        userFullName :{
            firstName: "Simarjit",
            lastName : "Singh"
        }
    }
}
//console.log(anotherUser.fullName.userFullName.firstName);

const obj1={1:"a", 2:"b"};
const obj2={3:"a", 4:"b"};

//const obj3={obj1,obj2};   // wrong way
//const obj3=Object.assign({},obj1,obj2)
//const obj3={...obj1,...obj2};
//console.log(obj3);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
