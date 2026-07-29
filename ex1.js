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
//strings
let strooo="anamika";
console.log(strooo.indexOf("m"));
console.log(str.length);
for(let i=0;i<str.length;i++){
    console.log(str[i]);
}
console.log(str[7]);
// for(let c of str){
//     console.log(c);
// }
let obj7={
    name:"anshika",
    age:18,
    course:"CSE",
    address:"ghaziabad"
};
// console.log(obj7.name);
// console.log(obj7.age);
// console.log(obj7.course);
// console.log(obj7.address);
// console.log("her name is "+ obj7.name+" and her age is "+obj7["age"]+" and she pursuing a course "+obj7.course+" and she is from "+obj7["address"]);
console.log(`her name is  ${obj7.name} and her age is  ${obj7["age"]} and she pursuing a course ${obj7.course} and she is from ${obj7["address"]}`);
//arrays
let arr=[1, "code" , true , 3.4];
console.log(arr);
console.log(arr.length);
