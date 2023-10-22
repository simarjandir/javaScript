const myNums=[1,2,3,4,5,6];
// reduce
// const mySum=myNums.reduce(function (accumulator,currentValue){
//     console.log(` Accumulator   ${accumulator}   and Current Value     ${currentValue}`);
//     return accumulator + currentValue;

// },0)

// reduce by arrow func

// const mySum=myNums.reduce((accumulator,currentValue) => accumulator + currentValue,0)

// console.log(mySum);

const shoppingCart=[
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "Python course",
        price : 2499
    },
    {
        itemName : "Wordpress course",
        price : 1599
    },
    {
        itemName : "Front End course",
        price : 4999
    },
    {
        itemName : "Data Science course",
        price : 12999
    }
];
//const courseSum= shoppingCart.reduce((accumulator,item) => accumulator+item.price,0);
const courseSum= shoppingCart
                .filter((item) => item.itemName === "js course")
                .reduce((accumulatoer,item) => accumulatoer + item.price,0 )
console.log(courseSum);