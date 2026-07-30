//map,filter,reduce.
//map
let arr=[1,2,3,4,5,6,7,8,9,10];
const square=(e)=>{
    return e*e;
}
// let squareArray=arr.map(square);
let squareArray=arr.map(
    (e,index,array)=>{
        return e**2;
    }
);
console.log(squareArray);
//filter method
const checkEVEN=(e)=>{
    if(e%2 ==0){
        return true;
    }
    return false;
}
let evenARRAY=arr.filter(checkEVEN);
console.log(evenARRAY);
//reduce method
let arr3=[1,2,3,4,5,6,7,8,9,10];
const add=(a,b)=>{
    return a+b;
}
let sumOFnNO=arr3.reduce(add);
console.log(sumOFnNO);
//array from
let str="anamika";
console.log(Array.from(str));