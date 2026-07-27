var a=10;
let b=30;//in const we cannot update the variable
// console.log("a=",a);
// console.log("a=",b);
//if a is var in both side outside and inside the curly braces then value of curly braces should be an output because updated value.
//if a is let inside and ouput print differently.
{
    let a=120;
    console.log("value of a inside braces:",a);
}
console.log("value of a:",a);
//for-in loop
let arrVAR={
    name:"anamika",
    age:19,
    gender:"female",
    branch:"CSE Core"
};
for(let key in arrVAR){
    console.log(key,":",arrVAR[key]);

}
//for-of loop
let str="anamika";
for(let c of str){
    console.log(c);
}
//functions
function sum(a=0,b=0){
    return a+b;
}
let result=sum(2);
console.log(result);
//arrow function
const fullName=(name) => {
    console.log("your name is ",name);
}
fullName();//undefined
fullName("ananya");
fullName("anjor");