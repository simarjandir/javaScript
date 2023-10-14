//Immediately invoked function Expressions
(function chah(){
    console.log("DB Connected");
})();

(()=> {
    console.log("DB two connected");
})();

((name)=>{
    console.log(`hello ${name} DB Connected`);
})("Simarjit");