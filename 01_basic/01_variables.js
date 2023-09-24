const accountId=14433221
let accountEmail="simar@gmail.com"
var accountPassword="12345678"
accountCity="jalandhar"
let accountState;
/*
not use var because of scope issue
*/
//accountId=2    // not allowed
console.log(accountId);
accountEmail="abc@gmail.com"
accountPassword="gsdfggrre"
accountCity="delhi"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);